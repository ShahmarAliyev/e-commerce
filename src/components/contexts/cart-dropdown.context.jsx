import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartDrowdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  cartCount: 0,
  clearCartItem: () => {},
  cartTotal: 0,
});
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems, cartItemToClear) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToClear.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  }
};
export const CartDrowdownProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const totalCount = cartItems.reduce(function (prev, current) {
      return prev + current.quantity;
    }, 0);
    setCartCount(totalCount);
  }, [cartItems]);

  useEffect(() => {
    const totalCost = cartItems.reduce(function (prev, current) {
      return prev + current.price * current.quantity;
    }, 0);
    setCartTotal(totalCost);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };
  return (
    <CartDrowdownContext.Provider value={value}>
      {children}
    </CartDrowdownContext.Provider>
  );
};
