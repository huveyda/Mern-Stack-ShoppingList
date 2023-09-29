import { useEffect } from "react";
import { useShoppingListsContext } from "../hooks/useShoppingListsContext";

//components
import ShoppingListDetails from "../components/ShoppingListDetails";
import ShoppingListForm from "../components/ShoppingListForm";

function Home() {
  const { shoppingLists, dispatch } = useShoppingListsContext();

  useEffect(() => {
    const fetchShoppingLists = async () => {
      const response = await fetch("/api/shoppinglists");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_SHOPPINGLISTS", payload: json });
      }
    };
    fetchShoppingLists();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="shoppingLists">
        {shoppingLists &&
          shoppingLists.map((shoppingList) => (
            <ShoppingListDetails
              key={shoppingList._id}
              shoppingList={shoppingList}
            />
          ))}
      </div>
      <ShoppingListForm />
    </div>
  );
}

export default Home;
