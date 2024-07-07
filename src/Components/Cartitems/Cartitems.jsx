import { useContext, useState } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import Popup from "../Popup.jsx"; // Import the Popup component

const Cartitems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    clearCart,
  } = useContext(ShopContext);

  const [showPopup, setShowPopup] = useState(false);

  const handleBuy = () => {
    setShowPopup(true);
    clearCart();
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cart-item">
              <div className="cart-product">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <p>{product.name}</p>
              <p>${product.new_price.toFixed(2)}</p>
              <div className="quantity-control">
                <button onClick={() => addToCart(product.id)}>+</button>
                <div className="quantity">{cartItems[product.id]}</div>
                <button onClick={() => removeFromCart(product.id)}>-</button>
              </div>
              <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          );
        }
        return null;
      })}
      {getTotalCartAmount() > 0 ? (
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1 className="text-2xl font-bold">Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount().toFixed(2)}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount().toFixed(2)}</h3>
              </div>
            </div>
            <div className="button-container">
              <button className="button_buy" onClick={handleBuy}>
                BUY
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty</p>
      )}
      {showPopup && (
        <Popup
          message="Thank you for your purchase!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default Cartitems;
