import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  // Added placeOrder to the destructured context values
  const { cart, isOpen, setIsOpen, removeFromCart, changeQty, clearCart, totalPrice, placeOrder } = useCart();

  // New state variables for the checkout form
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });

  // Handle the final order submission
  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await placeOrder(customer);

    setIsSubmitting(false);

    if (result.success) {
      alert('Order placed successfully! Check your MongoDB Atlas database.');
      // Reset the drawer state after success
      setIsOpen(false);
      setIsCheckingOut(false);
      setCustomer({ name: '', email: '', phone: '' });
    } else {
      alert('Failed to place order: ' + result.message);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-[1.4rem] border-b border-[rgba(255,255,255,0.07)] bg-[#141414] flex-shrink-0">
          <div className="flex items-center gap-3 text-gold">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2 className="font-display text-xl text-cream">Your Cart</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-full
                       w-9 h-9 flex items-center justify-center text-muted cursor-pointer
                       hover:bg-[rgba(245,166,35,0.15)] hover:text-gold hover:border-[rgba(245,166,35,0.4)] transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center p-8">
            <div className="text-6xl opacity-70 mb-2">🛒</div>
            <p className="font-display text-lg text-cream">Your cart is empty</p>
            <span className="text-sm text-[#5a5652]">Add something delicious!</span>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3 scrollbar-thin">
            {cart.map(item => (
              <div key={item.name}
                   className="flex items-start gap-4 bg-[#1e1e1e] border border-[rgba(255,255,255,0.05)]
                              rounded-xl p-3 relative animate-itemSlide">
                {/* Image */}
                <div className="w-[62px] h-[62px] rounded-lg overflow-hidden bg-dark3 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-display text-sm text-cream">{item.name}</span>
                  <span className="text-sm font-bold text-gold">${(item.price * item.qty).toFixed(2)}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => changeQty(item.name, -1)}
                      className="w-[26px] h-[26px] rounded-full border border-[rgba(245,166,35,0.4)]
                                 bg-[rgba(245,166,35,0.08)] text-gold text-lg flex items-center justify-center
                                 cursor-pointer hover:bg-gold hover:text-[#111] hover:border-gold transition-all"
                    >−</button>
                    <span className="min-w-[22px] text-center text-sm font-bold text-cream">{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.name, 1)}
                      className="w-[26px] h-[26px] rounded-full border border-[rgba(245,166,35,0.4)]
                                 bg-[rgba(245,166,35,0.08)] text-gold text-lg flex items-center justify-center
                                 cursor-pointer hover:bg-gold hover:text-[#111] hover:border-gold transition-all"
                    >+</button>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="bg-transparent border-none text-[#4a4744] cursor-pointer hover:text-[#e05252] transition-colors mt-0.5"
                  title="Remove"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-6 py-[1.4rem] border-t border-[rgba(255,255,255,0.07)] bg-[#141414]
                          flex-shrink-0 flex flex-col gap-3">
            <div className="flex items-center justify-between py-1">
              <span className="text-sm uppercase tracking-widest text-[#7a7672] font-bold">Total</span>
              <span className="font-display text-2xl font-bold text-gold">${totalPrice.toFixed(2)}</span>
            </div>

            {/* Checkout Form Toggle */}
            {!isCheckingOut ? (
              <>
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 bg-gold hover:bg-gold2 text-[#111] font-bold rounded-full
                             text-base tracking-wide transition-all hover:-translate-y-0.5
                             hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)] cursor-pointer border-none"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={clearCart}
                  className="w-full py-2.5 bg-transparent border border-[rgba(255,255,255,0.1)] rounded-full
                             text-[#6a6662] text-xs font-bold uppercase tracking-widest cursor-pointer
                             flex items-center justify-center gap-2
                             hover:text-[#e05252] hover:border-[rgba(224,82,82,0.4)] hover:bg-[rgba(224,82,82,0.06)] transition-all"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"/>
                    <path d="M19 6l-1 14H6L5 6"/>
                    <path d="M10 11v6M14 11v6M9 6V4h6v2"/>
                  </svg>
                  Clear Cart
                </button>
              </>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-3 mt-2 animate-itemSlide">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={customer.name}
                  onChange={(e) => setCustomer({...customer, name: e.target.value})}
                  className="w-full bg-[#1e1e1e] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-cream outline-none focus:border-gold transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={customer.email}
                  onChange={(e) => setCustomer({...customer, email: e.target.value})}
                  className="w-full bg-[#1e1e1e] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-cream outline-none focus:border-gold transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={customer.phone}
                  onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                  className="w-full bg-[#1e1e1e] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-cream outline-none focus:border-gold transition-colors"
                />
                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="flex-1 py-3 bg-transparent border border-[rgba(255,255,255,0.1)] rounded-full text-[#6a6662] text-sm font-bold uppercase tracking-wide cursor-pointer hover:text-cream hover:bg-[rgba(255,255,255,0.05)] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-full text-sm uppercase tracking-wide transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </aside>
    </>
  );
}