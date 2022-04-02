import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
const CartDrowdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to checkout</Button>
      </div>
    </div>
  );
};

export default CartDrowdown;
