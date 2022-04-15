import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

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

// import { Link, Outlet } from "react-router-dom";
// import { Fragment, useContext } from "react";

// import { ReactComponent as Logo } from "../../assets/crown (1).svg";

// import "./navigation.styles.scss";
// import { logOut } from "../../utils/firebase/firebase.utils";
// import { UserContext } from "../../components/contexts/user.context";
// import CartIcon from "../../components/cart-icon/cart-icon.component";
// import CartDrowdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartDrowdownContext } from "../../components/contexts/cart-dropdown.context";

// const Navigation = () => {
//   const { isHidden, setHidden } = useContext(CartDrowdownContext);
//   const { currentUser } = useContext(UserContext);

//   const signUserOut = async () => {
//     console.log("signin user out ");
//     await logOut();
//     console.log("signed out");
//   };

//   const handleDropdownClick = () => {
//     setHidden(!isHidden);
//   };
//   return (
//     <Fragment>
//       <div className="navigation">
//         <Link className="logo-container" to="/">
//           <Logo className="logo" />
//         </Link>
//         <div className="nav-links-container">
//           <Link className="nav-link" to="/shop">
//             Shop
//           </Link>

//           {currentUser ? (
//             <span className="nav-link" onClick={signUserOut}>
//               Sign out
//             </span>
//           ) : (
//             <Link className="nav-link" to="/auth">
//               Sign in
//             </Link>
//           )}
//           <CartIcon />
//         </div>
//         {isHidden && (
//           <span onClick={handleDropdownClick}>
//             <CartDrowdown />
//           </span>
//         )}
//       </div>
//       <Outlet />
//     </Fragment>
//   );
// };

// export default Navigation;
