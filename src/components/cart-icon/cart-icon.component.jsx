import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg";
import { useContext } from "react";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";

const CartIcon = () => {
  const { cartCount } = useContext(CartDrowdownContext);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
