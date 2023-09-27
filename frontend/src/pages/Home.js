import { useEffect, useState } from "react";

//components
import ShoppingListDetails from "../components/ShoppingListDetails";
import ShoppingListForm from "../components/ShoppingListForm";

function Home() {
  const [shoppingLists, setShoppingLists] = useState(null);

  useEffect(() => {
    const fetchShoppingLists = async () => {
      const response = await fetch("/api/shoppinglists");
      const json = await response.json();

      if (response.ok) {
        setShoppingLists(json);
      }
    };
    fetchShoppingLists();
  }, []);
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
