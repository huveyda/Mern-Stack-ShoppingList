import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShoppingListsContextProvider } from "./context/ShoppingListsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShoppingListsContextProvider>
      <App />
    </ShoppingListsContextProvider>
  </React.StrictMode>
);
