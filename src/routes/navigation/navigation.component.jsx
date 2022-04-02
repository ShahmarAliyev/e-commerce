import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as Logo } from "../../assets/crown (1).svg";

import "./navigation.styles.scss";
import { logOut } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../components/contexts/user.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const signUserOut = async () => {
    console.log("signin user out ");
    await logOut();
    console.log("signed out");
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signUserOut}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
