
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

import products from "./data/products";

import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Add product to cart
  function addToCart(product) {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 }
      ]);
    }
  }

  // Remove product from cart
  function removeFromCart(id) {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  }

  // Search and category filtering
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Total cart quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Navbar cartCount={cartCount} />

      <section className="hero" id="home">
        <h1>Welcome to ShopEase</h1>
        <p>Find your favourite products at the best prices.</p>
      </section>

      <section className="products-section" id="products">

        <h2>Our Products</h2>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <div className="categories">
          {["All", "Electronics", "Fashion", "Accessories"].map(
            (item) => (
              <button
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>

      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />

      <footer>
        <p>© 2026 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
