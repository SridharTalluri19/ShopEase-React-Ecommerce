
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEase</h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
      </div>

      <div className="cart-count">
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;
