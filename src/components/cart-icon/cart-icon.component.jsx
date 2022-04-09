import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg";
import { useContext } from "react";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount } = useContext(CartDrowdownContext);

  return (
    <CartIconContainer className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
