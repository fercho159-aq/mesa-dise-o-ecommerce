/* =========================================================
   Cart — persiste en localStorage.
   Estructura: { [productId]: quantity }
   ========================================================= */

const CART_KEY = 'raiz_cart_v1';

const Cart = {
  _read() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
    catch { return {}; }
  },
  _write(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); },

  all() { return this._read(); },

  count() {
    return Object.values(this._read()).reduce((a, b) => a + b, 0);
  },

  add(id, qty = 1) {
    const c = this._read();
    c[id] = (c[id] || 0) + qty;
    this._write(c);
    if (typeof updateCartBadge === 'function') updateCartBadge();
  },

  setQty(id, qty) {
    const c = this._read();
    if (qty <= 0) delete c[id]; else c[id] = qty;
    this._write(c);
    if (typeof updateCartBadge === 'function') updateCartBadge();
  },

  remove(id) {
    const c = this._read();
    delete c[id];
    this._write(c);
    if (typeof updateCartBadge === 'function') updateCartBadge();
  },

  clear() {
    localStorage.removeItem(CART_KEY);
    if (typeof updateCartBadge === 'function') updateCartBadge();
  },

  items() {
    const c = this._read();
    return Object.entries(c)
      .map(([id, qty]) => {
        const p = getProduct(id);
        return p ? { ...p, qty } : null;
      })
      .filter(Boolean);
  },

  subtotal() {
    return this.items().reduce((sum, it) => sum + it.price * it.qty, 0);
  }
};
