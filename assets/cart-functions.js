function getCart() {
    return JSON.parse(localStorage.getItem('beanboutique_cart') || '[]');
}
function saveCart(cart) {
    localStorage.setItem('beanboutique_cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cart = getCart();
    const el = document.getElementById('cart-count');
    if (el) el.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}
window.addToCart = function(product) {
    const cart = getCart();
    const existing = cart.find(item => item.name === product.name && item.type === product.type);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    saveCart(cart);
    updateCartCount();
};
function changeQty(idx, delta) {
    const cart = getCart();
    if (!cart[idx]) return; // Prevent errors if idx is invalid
    if (cart[idx].qty === 1 && delta === -1) {
        removeItem(idx);
        return;
    }
    cart[idx].qty += delta;
    if (cart[idx].qty < 1) cart[idx].qty = 1;
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
    updateCartCount();
}
function removeItem(idx) {
    const cart = getCart();
    cart.splice(idx, 1);
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
    updateCartCount();
}
// Update cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);