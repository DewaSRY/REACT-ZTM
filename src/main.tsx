import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductseProvider, UserProvider, CartProvider } from "./Store";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ProductseProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </ProductseProvider>
    </UserProvider>
  </React.StrictMode>
);
