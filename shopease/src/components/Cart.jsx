
function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>₹{item.price * item.quantity}</span>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default Cart;
