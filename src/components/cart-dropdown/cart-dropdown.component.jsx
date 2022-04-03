import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";

const CartDrowdown = () => {
  const { cartItems } = useContext(CartDrowdownContext);

  const navigate = useNavigate();

  const goToCheckoutHandle = () => navigate("/checkout");
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-count">
            {/* <span className="empty-count1">Your Cart is Empty</span> */}
            <p className="empty-count2">Add Items to your cart</p>
          </div>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        )}
      </div>

      {cartItems.length === 0 ? (
        <Button disabled>Empty Cart</Button>
      ) : (
        <Button onClick={goToCheckoutHandle}>Checkout</Button>
      )}
    </div>
  );
};

export default CartDrowdown;
