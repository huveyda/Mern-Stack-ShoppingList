import React from "react";
import { useShoppingListsContext } from "../hooks/useShoppingListsContext";

//import date-fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function ShoppingListDetails({ shoppingList }) {
  const { dispatch } = useShoppingListsContext();

  const handleDelete = async () => {
    const response = await fetch("/api/shoppingLists/" + shoppingList._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_SHOPPINGLIST", payload: json });
    }
  };
  return (
    <div className="shoppingList-details">
      <h4>{shoppingList.title}</h4>
      <p>
        <strong>Shopping Items:</strong>
      </p>
      <ul>
        {shoppingList.items.map((item, index) => (
          <li key={index}>
            {item.item}: {item.quantity}
          </li>
        ))}
      </ul>
      <p>
        Created At:{" "}
        {formatDistanceToNow(new Date(shoppingList.createdAt), {
          addSuffix: true,
        })}
      </p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
}

export default ShoppingListDetails;
