import {
  setCarItems,
  removeItemFromCart,
  removeItemToCart,
  clearItemFromCart,
} from '../src/store/cart/cart.actions.ts';
import cartReducer from '../src/store/cart/cart.reducer.ts';
describe('Cart Reducer', () => {
  let state;

  describe('Default State', () => {
    beforeEach(() => {
      state = { isCartOpen: false, cartItems: [], cartCount: 0, cartTotal: 0 };
    });

    it('should return a default state when given an undefined input', () => {
      expect(cartReducer(undefined, { type: undefined })).toEqual(state);
    });
    it('should return the original without any duplication', () => {
      const action = { type: 'unrecognizedActionType' };
      expect(cartReducer(cartReducer, action)).toBe(cartReducer);
    });
  });

  describe('Is Cart Open', () => {
    beforeEach(() => {
      state = { isCartOpen: false, cartItems: [], cartCount: 0, cartTotal: 0 };
    });
    const openCart = {
      type: 'cart/SET_IS_CART_OPEN',
      payload: true,
    };
    const closeCart = {
      type: 'cart/SET_IS_CART_OPEN',
      payload: false,
    };
    it('opens the cart', () => {
      const { isCartOpen } = cartReducer(state, openCart);
      expect(isCartOpen).toEqual(true);
    });
    it('closes the cart', () => {
      const { isCartOpen } = cartReducer(state, closeCart);
      expect(isCartOpen).toEqual(false);
    });
  });

  describe('Set Cart Items', () => {
    describe('Adds the cart item to cart', () => {
      it('should handle adding a cart item', () => {
        const newCartItems = [
          {
            id: 1,
            name: 'Product 1',
            price: 10,
            quantity: 2,
          },
          {
            id: 2,
            name: 'Product 2',
            price: 15,
            quantity: 3,
          },
        ];
        const action = setCarItems(newCartItems);
        const nextState = cartReducer(state, action);
        expect(nextState.cartItems).toEqual(newCartItems);
      });
    });
    describe('Removes cart item from the cart', () => {
      let initialState;
      beforeEach(() => {
        initialState = {
          isCartOpen: false,
          cartItems: [
            { id: 1, name: 'Item 1', quantity: 2 },
            { id: 2, name: 'Item 2', quantity: 1 },
          ],
          cartCount: 3,
          cartTotal: 100,
        };
      });
      const cartItemToRemove = { id: 1, name: 'Item 1', quantity: 1 };

      it('should remove a cart item when given a valid item', () => {
        const action = removeItemToCart(
          initialState.cartItems,
          cartItemToRemove
        );
        const newState = cartReducer(initialState, action);
        expect(newState.cartItems.length).toBe(2);
        expect(newState.cartItems).toEqual([
          { id: 1, name: 'Item 1', quantity: 1 },
          { id: 2, name: 'Item 2', quantity: 1 },
        ]);
      });

      it('should clear the cart removing all the items', () => {
        const action = clearItemFromCart(
          initialState.cartItems,
          cartItemToRemove
        );
        const newState = cartReducer(initialState, action);
        console.log(newState);
        expect(newState.cartItems.length).toBe(1);
        expect(newState.cartItems).toEqual([
          { id: 2, name: 'Item 2', quantity: 1 },
        ]);
      });
    });
  });
});
