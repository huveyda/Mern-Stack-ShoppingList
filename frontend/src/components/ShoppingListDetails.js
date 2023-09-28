import React from "react";

function ShoppingListDetails({ shoppingList }) {
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
      <p>Created At: {shoppingList.createdAt}</p>
    </div>
  );
}

export default ShoppingListDetails;
