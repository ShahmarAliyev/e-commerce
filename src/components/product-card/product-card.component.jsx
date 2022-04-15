import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.actions";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
