import { setCarItems, setIsCartOpen } from './cart.actions';
import { AnyAction } from 'redux';
import { CartItem } from './cart.types';

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
  readonly cartCount: number;
  readonly cartTotal: number;
};
export const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCarItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};

export default cartReducer;
