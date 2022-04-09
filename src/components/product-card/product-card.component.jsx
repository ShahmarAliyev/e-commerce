import { useContext } from "react";
import Button from "../button/button.component";
import { CartDrowdownContext } from "../contexts/cart-dropdown.context";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartDrowdownContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add To Cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
