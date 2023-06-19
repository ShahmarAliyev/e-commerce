import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity}x${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
