import { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

// Definim funcția pentru formatarea descrierii
const formatDescription = (description) => {
  // Verificăm dacă description este definit și nu este null
  if (!description) {
    return null; // sau return <p>No description available</p>;
  }
  return description
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);
};

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-display">
      <div className="product-display-images">
        <div className="product-display-smallimg">
          <img src={product.image} alt="smallimg" />
          <img src={product.image} alt="smallimg" />
          <img src={product.image} alt="smallimg" />
          <img src={product.image} alt="smallimg" />
        </div>
        <div className="product-display-main-image">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="product-display-details">
        <h1>{product.name}</h1>
        <div className="product-display-rating">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt="star"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt="star"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt="star"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt="star"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107737.png"
            alt="star"
          />
          <p>(122)</p>
        </div>
        <div className="product-display-prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="product-display-sizes">
          {formatDescription(product.description)}
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="add-to-cart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
