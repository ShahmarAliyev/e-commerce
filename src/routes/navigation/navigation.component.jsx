import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown (1).svg";

import CartDrowdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";

import { logOut } from "../../utils/firebase/firebase.utils";

import { selectCurrentUser } from "../../store/user/user.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const isCartOpen = useSelector(selectIsCartOpen);

  const signUserOut = async () => {
    console.log("signin user out ");
    await logOut();
    console.log("signed out");
  };

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer className="logo-container" to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks className="nav-links-container">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signUserOut}>
              Sign out
            </span>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign in
            </NavLink>
          )}
          <span>
            <CartIcon />
          </span>
        </NavLinks>
        {isCartOpen && <CartDrowdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
