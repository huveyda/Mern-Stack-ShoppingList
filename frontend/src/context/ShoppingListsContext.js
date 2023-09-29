import { createContext, useReducer } from "react";

export const ShoppingListsContext = createContext();

export const shoppingListsReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHOPPINGLISTS":
      return {
        shoppingLists: action.payload,
      };

    case "CREATE_SHOPPINGLIST":
      return {
        shoppingLists: [action.payload, ...state.shoppingLists],
      };

    case "DELETE_SHOPPINGLIST":
      return {
        shoppingLists: state.shoppingLists.filter(
          (s) => s._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const ShoppingListsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingListsReducer, {
    shoppingLists: null,
  });

  return (
    <ShoppingListsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShoppingListsContext.Provider>
  );
};
