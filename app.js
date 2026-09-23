/**
 * Cakesbynessahh - Complete Storefront Logic
 * Mobile-First, Vanilla ES6+, No Build Tools
 * WhatsApp Hotline: 2349059340229
 */

// Global State
const state = {
  activeCategory: 'All',
  cart: [],
  currentlyConfiguringCake: null
};

// Size Option Configurations for Customizable Cakes
const CAKE_SIZE_OPTIONS = {
  'Celebration Cakes': [
    { label: '6-inch Standard (2 Layers) - Serves 6-8', priceDelta: 0 },
    { label: '8-inch Standard (2 Layers) - Serves 12-16', priceDelta: 6000 },
    { label: '8-inch Deluxe (3 Layers) - Serves 18-22', priceDelta: 12000 },
    { label: '10-inch Grand Celebration (3 Layers) - Serves 30+', priceDelta: 20000 }
  ],
  'Bento Cakes': [
    { label: '4-inch Mini Bento (Single Portion / Duo)', priceDelta: 0 },
    { label: '5-inch Bento Plus (Serves 2-3)', priceDelta: 2500 }
  ],
  'One-Layered Cakes': [
    { label: '8-inch Single-Layer Sponge (Serves 6-8)', priceDelta: 0 },
    { label: '10-inch Single-Layer Sponge (Serves 10-12)', priceDelta: 5000 }
  ]
};

// Cached DOM Elements
const elements = {
  // Catalog & Navigation
  productsGrid: document.getElementById('productsGrid'),
  productCount: document.getElementById('productCount'),
  catalogTitle: document.getElementById('catalog-title'),
  filterPills: document.querySelectorAll('.filter-pill'),
  orderNowBtn: document.getElementById('orderNowBtn'),

  // Header & Cart Trigger
  cartBtn: document.getElementById('cartBtn'),
  cartBadge: document.getElementById('cartBadge'),

  // Configurator Modal Elements
  modalBackdrop: document.getElementById('cakeModalBackdrop'),
  modalCloseBtn: document.getElementById('closeModalBtn'),
  modalTitle: document.getElementById('modalCakeTitle'),
  modalProductName: document.getElementById('modalProductName'),
  modalProductImg: document.getElementById('modalProductImg'),
  modalBasePrice: document.getElementById('modalBasePrice'),
  modalSizeSelect: document.getElementById('cakeSizeSelect'),
  modalInscription: document.getElementById('cakeInscription'),
  charCounter: document.getElementById('charCounter'),
  modalDeliveryDate: document.getElementById('cakeDeliveryDate'),
  modalTotalDisplay: document.getElementById('modalCalculatedTotal'),
  saveCakeToCartBtn: document.getElementById('saveCakeToCartBtn'),

  // Slide-Out Cart Drawer Elements
  cartDrawer: document.getElementById('cartDrawer'),
  cartOverlay: document.getElementById('cartOverlay'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartItemsList: document.getElementById('cartItemsList'),
  drawerCartCount: document.getElementById('drawerCartCount'),
  cartDrawerTotal: document.getElementById('cartDrawerTotal'),
  custName: document.getElementById('custName'),
  custAddress: document.getElementById('custAddress'),
  custNote: document.getElementById('custNote'),
  whatsappCheckoutBtn: document.getElementById('whatsappCheckoutBtn'),

  // Toast
  toast: document.getElementById('toast')
};

/**
 * App Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
  initCategoryFilters();
  initModalHandlers();
  initDrawerHandlers();
  initCheckoutHandler();
  initDatePickerConstraints();

  // Initial Product Render
  renderProducts(state.activeCategory);
  renderCartDrawer();
});

/* ==========================================================================
   1. Products Catalog & Dynamic Cards
   ========================================================================== */

/**
 * Initialize category filter pill clicks
 */
function initCategoryFilters() {
  if (!elements.filterPills) return;

  elements.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const selectedCategory = pill.getAttribute('data-category');
      if (selectedCategory === state.activeCategory) return;

      // Update pill active classes
      elements.filterPills.forEach(btn => {
        const isActive = btn === pill;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive.toString());
      });

      state.activeCategory = selectedCategory;
      renderProducts(selectedCategory);
    });
  });
}

/**
 * Render product cards dynamically based on category
 * @param {string} category 
 */
function renderProducts(category) {
  if (!elements.productsGrid) return;

  const catalog = window.BAKERY_PRODUCTS || [];
  const filtered = category === 'All' 
    ? catalog 
    : catalog.filter(p => p.category.toLowerCase() === category.toLowerCase());

  // Update section meta
  if (elements.catalogTitle) {
    elements.catalogTitle.textContent = category === 'All' ? 'All Confections' : category;
  }
  if (elements.productCount) {
    elements.productCount.textContent = `${filtered.length} item${filtered.length === 1 ? '' : 's'} available`;
  }

  // Clear container
  elements.productsGrid.innerHTML = '';

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 2.2rem; margin-bottom: 0.5rem;">🧁</p>
        <p style="font-weight: 700;">No bakery treats found in this category.</p>
        <p style="font-size: 0.85rem;">Check back shortly for our next fresh oven batch!</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    const priceText = formatNaira(product.basePrice);

    card.innerHTML = `
      <div class="card-image-box">
        <img 
          src="${escapeHTML(product.image)}" 
          alt="${escapeHTML(product.name)}" 
          class="product-img"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'"
        >
        <div class="card-badges">
          ${product.isCustomizable ? '<span class="badge-customizable">✨ Customizable</span>' : ''}
        </div>
      </div>
      <div class="card-body">
        <span class="card-category">${escapeHTML(product.category)}</span>
        <h4 class="card-title">${escapeHTML(product.name)}</h4>
        <p class="card-description">${escapeHTML(product.description || '')}</p>
        
        <!-- Prominent Pricing & CTA Row -->
        <div class="card-pricing-row">
          <div class="card-price-container">
            <span class="price-lead-label">${product.isCustomizable ? 'From' : 'Price'}</span>
            <span class="prominent-price">${priceText}</span>
          </div>

          ${product.isCustomizable ? `
            <button class="card-cta-btn btn-customize" data-action="customize" data-id="${product.id}" aria-label="Customize ${escapeHTML(product.name)}">
              <span>Customize 🎂</span>
            </button>
          ` : `
            <button class="card-cta-btn btn-quick-add" data-action="quick-add" data-id="${product.id}" aria-label="Add ${escapeHTML(product.name)} to cart">
              <span>+ Add to Cart 🛒</span>
            </button>
          `}
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  elements.productsGrid.appendChild(fragment);

  // Attach click handlers
  attachCardEvents();
}

/**
 * Attach click listeners to product action buttons
 */
function attachCardEvents() {
  const buttons = elements.productsGrid.querySelectorAll('.card-cta-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.getAttribute('data-action');
      const productId = btn.getAttribute('data-id');
      const product = (window.BAKERY_PRODUCTS || []).find(p => p.id === productId);

      if (!product) return;

      if (action === 'customize') {
        openConfiguratorModal(product);
      } else if (action === 'quick-add') {
        addStandardItemToCart(product);
      }
    });
  });
}

/* ==========================================================================
   2. Custom Cake Configurator Modal
   ========================================================================== */

/**
 * Configure date picker to only allow future dates (min: tomorrow)
 */
function initDatePickerConstraints() {
  if (!elements.modalDeliveryDate) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];
  elements.modalDeliveryDate.setAttribute('min', minDateStr);
  elements.modalDeliveryDate.value = minDateStr;
}

/**
 * Initialize Configurator Modal Events
 */
function initModalHandlers() {
  if (!elements.modalBackdrop) return;

  // Close modal button
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeConfiguratorModal);
  }

  // Click outside modal content to close
  elements.modalBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.modalBackdrop) {
      closeConfiguratorModal();
    }
  });

  // Escape key listener for both modal and drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (elements.modalBackdrop.classList.contains('open')) {
        closeConfiguratorModal();
      } else if (elements.cartDrawer.classList.contains('open')) {
        closeCartDrawer();
      }
    }
  });

  // Inscription Character Counter
  if (elements.modalInscription && elements.charCounter) {
    elements.modalInscription.addEventListener('input', () => {
      const length = elements.modalInscription.value.length;
      elements.charCounter.textContent = `${length}/40`;
    });
  }

  // Size Select Change updates live calculated price
  if (elements.modalSizeSelect) {
    elements.modalSizeSelect.addEventListener('change', updateModalCalculatedTotal);
  }

  // Save to Cart Button
  if (elements.saveCakeToCartBtn) {
    elements.saveCakeToCartBtn.addEventListener('click', handleSaveCakeToCart);
  }
}

/**
 * Opens Configurator Modal with product details
 * @param {object} product 
 */
function openConfiguratorModal(product) {
  state.currentlyConfiguringCake = product;

  // Populate header and summary
  elements.modalTitle.textContent = `Customize: ${product.name}`;
  elements.modalProductName.textContent = product.name;
  elements.modalProductImg.src = product.image;
  elements.modalProductImg.alt = product.name;
  elements.modalBasePrice.textContent = formatNaira(product.basePrice);

  // Populate Size / Type Options based on category
  const sizeOptions = CAKE_SIZE_OPTIONS[product.category] || [
    { label: 'Standard Size (Base)', priceDelta: 0 },
    { label: 'Deluxe Size (+₦5,000)', priceDelta: 5000 }
  ];

  elements.modalSizeSelect.innerHTML = '';
  sizeOptions.forEach((opt, index) => {
    const optEl = document.createElement('option');
    optEl.value = index;
    optEl.textContent = opt.label;
    elements.modalSizeSelect.appendChild(optEl);
  });

  // Reset form inputs
  elements.modalInscription.value = '';
  if (elements.charCounter) elements.charCounter.textContent = '0/40';

  // Default to Red Velvet radio
  const defaultFlavorRadio = document.querySelector('input[name="spongeFlavor"][value="Red Velvet"]');
  if (defaultFlavorRadio) defaultFlavorRadio.checked = true;

  // Recalculate total
  updateModalCalculatedTotal();

  // Display modal
  elements.modalBackdrop.classList.add('open');
  elements.modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

/**
 * Updates the live price inside the modal based on chosen size
 */
function updateModalCalculatedTotal() {
  if (!state.currentlyConfiguringCake) return;

  const product = state.currentlyConfiguringCake;
  const sizeOptions = CAKE_SIZE_OPTIONS[product.category] || [{ priceDelta: 0 }];
  const selectedIndex = parseInt(elements.modalSizeSelect.value, 10) || 0;
  const selectedSize = sizeOptions[selectedIndex] || sizeOptions[0];

  const currentTotal = product.basePrice + (selectedSize.priceDelta || 0);
  elements.modalTotalDisplay.textContent = formatNaira(currentTotal);
}

/**
 * Closes the Configurator Modal
 */
function closeConfiguratorModal() {
  elements.modalBackdrop.classList.remove('open');
  elements.modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  state.currentlyConfiguringCake = null;
}

/**
 * Validates and saves customized cake to the cart state
 */
function handleSaveCakeToCart() {
  const product = state.currentlyConfiguringCake;
  if (!product) return;

  // Validate Delivery Date
  const deliveryDate = elements.modalDeliveryDate.value;
  if (!deliveryDate) {
    showToast('⚠️ Please select a valid delivery/pickup date.');
    elements.modalDeliveryDate.focus();
    return;
  }

  // Selected Size
  const sizeOptions = CAKE_SIZE_OPTIONS[product.category] || [{ label: 'Standard Size', priceDelta: 0 }];
  const selectedIndex = parseInt(elements.modalSizeSelect.value, 10) || 0;
  const chosenSize = sizeOptions[selectedIndex] || sizeOptions[0];

  // Selected Sponge Flavor
  const selectedFlavorRadio = document.querySelector('input[name="spongeFlavor"]:checked');
  const flavor = selectedFlavorRadio ? selectedFlavorRadio.value : 'Red Velvet';

  // Inscription
  const inscription = elements.modalInscription.value.trim() || 'No custom inscription';

  // Final calculated unit price
  const unitPrice = product.basePrice + (chosenSize.priceDelta || 0);

  const cartItem = {
    cartId: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    productId: product.id,
    name: product.name,
    category: product.category,
    image: product.image,
    isCustomized: true,
    size: chosenSize.label,
    flavor: flavor,
    inscription: inscription,
    deliveryDate: deliveryDate,
    unitPrice: unitPrice,
    quantity: 1
  };

  state.cart.push(cartItem);

  // Update UI
  renderCartDrawer();
  updateCartBadge();
  closeConfiguratorModal();
  openCartDrawer();
  showToast(`🎂 Customized "${product.name}" added to cart!`);
}

/* ==========================================================================
   3. Cart State Management & Mobile Slide-Out Drawer
   ========================================================================== */

/**
 * Adds a standard (non-customizable) item to cart
 * @param {object} product 
 */
function addStandardItemToCart(product) {
  // Check if standard item already in cart
  const existingItem = state.cart.find(item => !item.isCustomized && item.productId === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      cartId: `std-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      productId: product.id,
      name: product.name,
      category: product.category,
      image: product.image,
      isCustomized: false,
      unitPrice: product.basePrice,
      quantity: 1
    });
  }

  renderCartDrawer();
  updateCartBadge();
  showToast(`🛒 Added "${product.name}" to cart!`);
}

/**
 * Initializes Cart Drawer toggle listeners
 */
function initDrawerHandlers() {
  if (elements.cartBtn) {
    elements.cartBtn.addEventListener('click', openCartDrawer);
  }

  if (elements.closeCartBtn) {
    elements.closeCartBtn.addEventListener('click', closeCartDrawer);
  }

  if (elements.cartOverlay) {
    elements.cartOverlay.addEventListener('click', closeCartDrawer);
  }
}

/**
 * Opens the Cart Drawer
 */
function openCartDrawer() {
  elements.cartDrawer.classList.add('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'false');
  elements.cartOverlay.classList.add('open');
  elements.cartOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

/**
 * Closes the Cart Drawer
 */
function closeCartDrawer() {
  elements.cartDrawer.classList.remove('open');
  elements.cartDrawer.setAttribute('aria-hidden', 'true');
  elements.cartOverlay.classList.remove('open');
  elements.cartOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

/**
 * Updates item quantity (+1 or -1)
 * @param {string} cartId 
 * @param {number} delta 
 */
function updateItemQuantity(cartId, delta) {
  const item = state.cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(cartId);
    return;
  }

  renderCartDrawer();
  updateCartBadge();
}

/**
 * Removes an item from the cart
 * @param {string} cartId 
 */
function removeFromCart(cartId) {
  const itemIndex = state.cart.findIndex(i => i.cartId === cartId);
  if (itemIndex > -1) {
    const removed = state.cart.splice(itemIndex, 1)[0];
    renderCartDrawer();
    updateCartBadge();
    showToast(`Removed "${removed.name}" from cart.`);
  }
}

/**
 * Calculates total Naira price of the cart
 * @returns {number}
 */
function calculateCartTotal() {
  return state.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
}

/**
 * Updates cart count badge on header and drawer
 */
function updateCartBadge() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  if (elements.cartBadge) {
    elements.cartBadge.textContent = totalCount;
    elements.cartBadge.style.transform = 'scale(1.35)';
    setTimeout(() => {
      elements.cartBadge.style.transform = 'scale(1)';
    }, 200);
  }

  if (elements.drawerCartCount) {
    elements.drawerCartCount.textContent = totalCount;
  }
}

/**
 * Renders the contents of the Slide-Out Cart Drawer
 */
function renderCartDrawer() {
  if (!elements.cartItemsList) return;

  elements.cartItemsList.innerHTML = '';
  const totalAmount = calculateCartTotal();

  // Update total price display
  if (elements.cartDrawerTotal) {
    elements.cartDrawerTotal.textContent = formatNaira(totalAmount);
  }

  // Handle Empty State
  if (state.cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div class="empty-cart-state">
        <span class="empty-icon">🧁</span>
        <h4 class="empty-title">Your Cart is Empty</h4>
        <p class="empty-desc">Explore our signature cakes, parfaits, and pastries to make your celebration sweeter!</p>
        <button class="btn btn-outline" id="browseMenuFromCartBtn">Explore Menu</button>
      </div>
    `;

    const browseBtn = document.getElementById('browseMenuFromCartBtn');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => {
        closeCartDrawer();
        const catalogSection = document.getElementById('catalog');
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    return;
  }

  // Render populated cart items
  const fragment = document.createDocumentFragment();

  state.cart.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item-card';
    itemCard.setAttribute('data-cart-id', item.cartId);

    const subtotal = item.unitPrice * item.quantity;

    itemCard.innerHTML = `
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.name)}" class="cart-item-thumb">
      
      <div class="cart-item-details">
        <h5 class="cart-item-name">${escapeHTML(item.name)}</h5>
        
        ${item.isCustomized ? `
          <span class="cart-custom-badge">Personalized Order</span>
          <div class="cart-custom-specs">
            <span class="spec-line"><strong>Size:</strong> ${escapeHTML(item.size)}</span>
            <span class="spec-line"><strong>Flavor:</strong> ${escapeHTML(item.flavor)}</span>
            <span class="spec-line"><strong>Note:</strong> "${escapeHTML(item.inscription)}"</span>
            <span class="spec-line"><strong>Date:</strong> ${escapeHTML(item.deliveryDate)}</span>
          </div>
        ` : ''}

        <div class="cart-item-pricing">
          <span class="cart-item-price">${formatNaira(subtotal)}</span>

          <!-- Quantity Stepper -->
          <div class="stepper">
            <button class="step-btn" data-action="decrement" aria-label="Decrease quantity">-</button>
            <span class="step-count">${item.quantity}</span>
            <button class="step-btn" data-action="increment" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </div>

      <!-- Remove Button -->
      <button class="cart-remove-btn" data-action="remove" aria-label="Remove ${escapeHTML(item.name)}">
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    `;

    fragment.appendChild(itemCard);
  });

  elements.cartItemsList.appendChild(fragment);

  // Attach event delegation for stepper and remove buttons
  attachCartItemEventListeners();
}

/**
 * Stepper and remove button events inside the cart drawer
 */
function attachCartItemEventListeners() {
  const itemCards = elements.cartItemsList.querySelectorAll('.cart-item-card');

  itemCards.forEach(card => {
    const cartId = card.getAttribute('data-cart-id');

    const decrementBtn = card.querySelector('[data-action="decrement"]');
    if (decrementBtn) {
      decrementBtn.addEventListener('click', () => updateItemQuantity(cartId, -1));
    }

    const incrementBtn = card.querySelector('[data-action="increment"]');
    if (incrementBtn) {
      incrementBtn.addEventListener('click', () => updateItemQuantity(cartId, 1));
    }

    const removeBtn = card.querySelector('[data-action="remove"]');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => removeFromCart(cartId));
    }
  });
}

/* ==========================================================================
   4. 1-Tap WhatsApp Checkout Compiler
   Hotline: 2349059340229
   ========================================================================== */

function initCheckoutHandler() {
  if (!elements.whatsappCheckoutBtn) return;
  elements.whatsappCheckoutBtn.addEventListener('click', handleWhatsAppCheckout);
}

/**
 * Validates inputs, compiles formatted WhatsApp order string, and redirects
 */
function handleWhatsAppCheckout() {
  if (state.cart.length === 0) {
    showToast('⚠️ Your cart is empty. Please add items to place an order.');
    return;
  }

  // Validate Customer Name
  const customerName = elements.custName ? elements.custName.value.trim() : '';
  if (!customerName) {
    showToast('⚠️ Please enter your name in the checkout form.');
    if (elements.custName) elements.custName.focus();
    return;
  }

  // Validate Delivery Address
  const deliveryAddress = elements.custAddress ? elements.custAddress.value.trim() : '';
  if (!deliveryAddress) {
    showToast('⚠️ Please enter your delivery address or specify pickup.');
    if (elements.custAddress) elements.custAddress.focus();
    return;
  }

  const pickupNote = elements.custNote ? elements.custNote.value.trim() : '';
  const totalAmount = calculateCartTotal();

  // Compile formatted WhatsApp message
  let message = `🎂 *NEW ORDER FOR CAKESBYNESSAHH* 🎂\n`;
  message += `_"Making Every Celebration Sweeter"_\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *CUSTOMER DETAILS:*\n`;
  message += `• *Name:* ${customerName}\n`;
  message += `• *Address/Location:* ${deliveryAddress}\n`;
  if (pickupNote) {
    message += `• *Special Note:* ${pickupNote}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛍️ *ORDER SUMMARY:*\n\n`;

  state.cart.forEach((item, index) => {
    const itemSubtotal = formatNaira(item.unitPrice * item.quantity);
    message += `${index + 1}. *${item.name}* (x${item.quantity})\n`;
    message += `   💰 Price: ${itemSubtotal}\n`;

    if (item.isCustomized) {
      message += `   • *Size/Type:* ${item.size}\n`;
      message += `   • *Sponge Flavor:* ${item.flavor}\n`;
      message += `   • *Inscription:* "${item.inscription}"\n`;
      message += `   • *Date:* ${item.deliveryDate}\n`;
    }
    message += `\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *TOTAL AMOUNT:* ${formatNaira(totalAmount)}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *Bakery:* Airport Road, Benin City, Edo State\n`;
  message += `Please confirm availability and share payment account details. Thank you! ✨`;

  // Encode URL
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2349059340229?text=${encodedText}`;

  // Open WhatsApp in new tab or direct app
  window.open(whatsappUrl, '_blank');
}

/* ==========================================================================
   5. Helpers & Utilities
   ========================================================================== */

/**
 * Format number to Naira currency string (e.g. 28000 -> "₦28,000")
 * @param {number} amount 
 * @returns {string}
 */
function formatNaira(amount) {
  const num = Number(amount) || 0;
  return '₦' + num.toLocaleString('en-NG');
}

/**
 * Simple HTML entity escape to prevent XSS
 * @param {string} str 
 * @returns {string}
 */
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Displays non-intrusive toast notification
 * @param {string} message 
 */
let toastTimeout = null;
function showToast(message) {
  if (!elements.toast) return;

  clearTimeout(toastTimeout);
  elements.toast.textContent = message;
  elements.toast.classList.add('show');

  toastTimeout = setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3200);
}
