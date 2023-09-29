import React, { useState } from "react";
import { useShoppingListsContext } from "../hooks/useShoppingListsContext";

function ShoppingListForm() {
  const { dispatch } = useShoppingListsContext();
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([{ item: "", quantity: "" }]);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addNewItem = () => {
    setItems([...items, { item: "", quantity: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedItems = items.map((item) => ({
      item: item.item,
      quantity: item.quantity,
    }));

    const shoppingList = {
      title: title,
      items: formattedItems,
    };

    try {
      const response = await fetch("/api/shoppingLists", {
        method: "POST",
        body: JSON.stringify(shoppingList),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      } else {
        setError(null);
        setEmptyFields([]);
        setTitle("");
        setItems([{ item: "", quantity: "" }]);
        console.log("Added a new shopping list: ", json);
        dispatch({ type: "CREATE_SHOPPINGLIST", payload: json });
      }
    } catch (error) {
      console.error("Error while submitting shopping list:", error);
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Shopping List</h3>
      <label>Shopping List Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields && emptyFields.includes("title") ? "error" : ""}
      />
      <label>Items:</label>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Item"
            value={item.item}
            onChange={(e) => handleItemChange(index, "item", e.target.value)}
            className={
              emptyFields && emptyFields.includes("item") ? "error" : ""
            }
          />
          <input
            type="text"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", e.target.value)
            }
            className={
              emptyFields && emptyFields.includes("quantity") ? "error" : ""
            }
          />
        </div>
      ))}
      <button onClick={addNewItem}>Add Item</button>
      <button>Add Shopping List</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default ShoppingListForm;
