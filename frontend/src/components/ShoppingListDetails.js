import React from "react";

function ShoppingListDetails({ shoppingList }) {
  return (
    <div className="shoppingList-details">
      <h4>{shoppingList.title}</h4>
      <p>
        <strong>Shopping Items:</strong>
        {shoppingList.items}
      </p>
      <p>{shoppingList.createdAt}</p>
    </div>
  );
}

export default ShoppingListDetails;
