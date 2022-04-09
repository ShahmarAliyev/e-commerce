import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDrowdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartDrowdownContext);

  const navigate = useNavigate();

  const goToCheckoutHandle = () => {
    navigate("/checkout");
    setIsCartOpen(true);
  };
  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        {cartItems.length === 0 ? (
          <EmptyMessage className="empty-count">
            {/* <span className="empty-count1">Your Cart is Empty</span> */}
            <p className="empty-count2">Add Items to your cart</p>
          </EmptyMessage>
        ) : (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        )}
      </CartItems>

      {cartItems.length === 0 ? (
        <Button disabled>Empty Cart</Button>
      ) : (
        <Button onClick={goToCheckoutHandle}>Checkout</Button>
      )}
    </CartDropdownContainer>
  );
};

export default CartDrowdown;
