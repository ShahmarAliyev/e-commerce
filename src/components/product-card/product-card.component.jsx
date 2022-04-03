import { useContext } from "react";
import Button from "../button/button.component";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDrowdownContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
