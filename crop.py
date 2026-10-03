from PIL import Image

path = "public/images/products/Screenshot_20261003_083936_Instagram.png"
img = Image.open(path)
w, h = img.size

# We want a square crop
size = w
left = 0
top = (h - size) // 2
right = w
bottom = (h + size) // 2

crop_img = img.crop((left, top, right, bottom))
crop_img.save(path)
print(f"Cropped {path} to {w}x{size}")
