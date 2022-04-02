import { createContext, useState } from "react";

export const CartDrowdownContext = createContext({
  hidden: true,
});

export const CartDrowdownProvider = ({ children }) => {
  const [isHidden, setHidden] = useState(false);
  const value = { isHidden, setHidden };
  return (
    <CartDrowdownContext.Provider value={value}>
      {children}
    </CartDrowdownContext.Provider>
  );
};
