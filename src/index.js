import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./components/contexts/user.context";
import { CategoriesProvider } from "./components/contexts/categories.context";
import { CartDrowdownProvider } from "./components/contexts/cart-dropdown.context";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        <CategoriesProvider>
          <CartDrowdownProvider>
            <App />
          </CartDrowdownProvider>
        </CategoriesProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
