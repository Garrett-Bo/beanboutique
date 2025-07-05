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
    showAddToCartConfirmation(product.name);
};

function showAddToCartConfirmation(productName) {
    let modal = document.getElementById('add-to-cart-confirmation');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'add-to-cart-confirmation';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.background = 'rgba(56,34,15,0.5)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '9999';
        modal.innerHTML = `
            <div style="background:#fff;padding:2rem 2.5rem;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.18);text-align:center;max-width:350px;width:90%;position:relative;">
                <button id="closeAddToCartModal" style="position:absolute;top:0.75rem;right:0.75rem;background:none;border:none;font-size:1.5rem;color:#A1887F;cursor:pointer;">&times;</button>
                <h3>Added to Cart!</h3>
                <p><strong>"${productName}"</strong> has been added to your cart.</p>
            </div>
        `;
        document.body.appendChild(modal);
    } else {
        modal.querySelector('p').innerHTML = `<strong>"${productName}"</strong> has been added to your cart.`;
        modal.style.display = 'flex';
    }
    document.getElementById('closeAddToCartModal').onclick = function() {
        modal.style.display = 'none';
    };
    setTimeout(() => { if (modal.style.display !== 'none') modal.style.display = 'none'; }, 2000);
}
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
document.addEventListener('DOMContentLoaded', updateCartCount);
