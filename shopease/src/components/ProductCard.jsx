
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹{product.price}</h4>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
