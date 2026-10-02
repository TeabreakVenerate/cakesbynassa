const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const sites = [
    "https://cedricgrolet.com",
    "https://www.peggyporschenacademy.com",
    "https://milkbarstore.com",
    "https://dominiqueansel.com",
    "https://www.laduree.com",
    "https://cakeisland.ng",
    "https://yefepere.com",
    "https://hansandrene.com",
    "https://tartine.com",
    "https://www.pierreherme.com",
    "https://thebutterend.com",
    "https://ladureeus.com"
];

function rgbToHex(rgb) {
    const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return rgb;
    return "#" + match.slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('');
}

async function scrapeSite(page, url) {
    try {
        console.log(`Navigating to ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        // wait a bit for dynamic content
        await page.waitForTimeout(3000);
        
        // Desktop metrics
        await page.setViewportSize({ width: 1440, height: 900 });
        
        const desktopData = await page.evaluate(() => {
            const rgbToHex = (rgb) => {
                const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
                if (!match) return rgb;
                return "#" + match.slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('');
            };

            const data = {};

            // 1. Hero
            const hero = document.querySelector('header, section, .hero, #hero') || document.body;
            if (hero) {
                const style = window.getComputedStyle(hero);
                data.hero = {
                    bgColor: rgbToHex(style.backgroundColor),
                    height: style.height,
                    layout: style.display,
                    padding: style.padding
                };
            }

            // 2. Typography
            const h1 = document.querySelector('h1') || document.querySelector('h2');
            const p = document.querySelector('p');
            
            data.typography = {
                h1: h1 ? {
                    fontFamily: window.getComputedStyle(h1).fontFamily,
                    fontSize: window.getComputedStyle(h1).fontSize,
                    lineHeight: window.getComputedStyle(h1).lineHeight,
                    letterSpacing: window.getComputedStyle(h1).letterSpacing
                } : null,
                p: p ? {
                    fontFamily: window.getComputedStyle(p).fontFamily,
                    fontSize: window.getComputedStyle(p).fontSize,
                    lineHeight: window.getComputedStyle(p).lineHeight,
                    letterSpacing: window.getComputedStyle(p).letterSpacing
                } : null
            };

            // 3. Colors
            const colors = new Set();
            document.querySelectorAll('body, h1, h2, p, a, button, .bg-primary, header, footer').forEach(el => {
                const st = window.getComputedStyle(el);
                if (st.backgroundColor && st.backgroundColor !== 'rgba(0, 0, 0, 0)') colors.add(rgbToHex(st.backgroundColor));
                if (st.color) colors.add(rgbToHex(st.color));
            });
            data.colors = Array.from(colors);

            // 4. Navigation
            const nav = document.querySelector('nav, header');
            if (nav) {
                const st = window.getComputedStyle(nav);
                const items = nav.querySelectorAll('a, li').length;
                data.navigation = {
                    type: st.position,
                    height: st.height,
                    background: rgbToHex(st.backgroundColor),
                    items: items
                };
            }

            // 5. CTA Buttons
            const btn = document.querySelector('button, .btn, a.button');
            if (btn) {
                const st = window.getComputedStyle(btn);
                data.cta = {
                    bgColor: rgbToHex(st.backgroundColor),
                    borderRadius: st.borderRadius,
                    padding: st.padding,
                    fontSize: st.fontSize,
                    text: btn.innerText.trim().substring(0, 30)
                };
            }

            // 6. Product Cards
            const cards = document.querySelector('.products, .grid, ul') || document.body;
            if (cards) {
                const st = window.getComputedStyle(cards);
                const firstChild = cards.children[0];
                let childSt = null;
                if (firstChild) childSt = window.getComputedStyle(firstChild);
                
                data.productCards = {
                    displayMode: st.display,
                    gridTemplateColumns: st.gridTemplateColumns !== 'none' ? st.gridTemplateColumns : null,
                    gap: st.gap,
                    childBorderRadius: childSt ? childSt.borderRadius : null,
                    childBoxShadow: childSt ? childSt.boxShadow : null
                };
            }

            // 7. Trust signals
            const textContent = document.body.innerText.toLowerCase();
            const trustSignals = [];
            if (textContent.includes('review')) trustSignals.push('reviews');
            if (textContent.includes('star')) trustSignals.push('stars rating');
            if (textContent.includes('featured in') || textContent.includes('as seen in')) trustSignals.push('media features');
            if (textContent.includes('award')) trustSignals.push('awards');
            if (document.querySelectorAll('svg[class*="star"], img[src*="star"]').length > 0) trustSignals.push('star icons');
            data.trustSignals = trustSignals;

            // 8. Image Handling
            const imgs = document.querySelectorAll('img');
            data.images = { count: imgs.length, examples: [] };
            for(let i=0; i<Math.min(imgs.length, 3); i++) {
                const img = imgs[i];
                const st = window.getComputedStyle(img);
                data.images.examples.push({
                    aspectRatio: st.aspectRatio,
                    objectFit: st.objectFit,
                    lazy: img.getAttribute('loading') || 'auto'
                });
            }

            return data;
        });

        // Mobile metrics
        await page.setViewportSize({ width: 375, height: 812 });
        await page.waitForTimeout(1000);
        
        const mobileData = await page.evaluate(() => {
            const h1 = document.querySelector('h1') || document.querySelector('h2');
            const cards = document.querySelector('.products, .grid, ul') || document.body;
            const stCards = window.getComputedStyle(cards);
            return {
                h1FontSize: h1 ? window.getComputedStyle(h1).fontSize : null,
                cardsDisplay: stCards.display,
                gridColumns: stCards.gridTemplateColumns !== 'none' ? stCards.gridTemplateColumns : null
            };
        });

        desktopData.mobileLayout = mobileData;
        return desktopData;

    } catch (e) {
        console.error(`Error on ${url}: ${e.message}`);
        return { error: e.message };
    }
}

async function main() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    
    const results = {};
    for (const url of sites) {
        const page = await context.newPage();
        const data = await scrapeSite(page, url);
        results[url] = data;
        await page.close();
    }
    
    await browser.close();
    
    fs.writeFileSync(
        path.join('..', 'research_tokens.json'),
        JSON.stringify(results, null, 2)
    );
    console.log("Done extracting data. Saved to research_tokens.json");
}

main();
