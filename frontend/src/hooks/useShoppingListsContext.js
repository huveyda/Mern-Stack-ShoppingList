import { ShoppingListsContext } from "../context/ShoppingListsContext";
import { useContext } from "react";

export const useShoppingListsContext = () => {
  const context = useContext(ShoppingListsContext);

  if (!context) {
    throw Error(
      "useShoppingListsContext must be used inside an ShoppingListsContextProvider"
    );
  }

  return context;
};
