import React, { useState } from "react";

function ShoppingListForm() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shoppingList = { title, items };

    const response = await fetch("/api/shoppingLists", {
      method: "POST",
      body: JSON.stringify(shoppingList),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setItems("");
      console.log("Added a new shopping list: ", json);
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
      />
      <label>Items:</label>
      <input
        type="text"
        onChange={(e) => setItems(e.target.value)}
        value={items}
      />
      <button>Add Shopping List</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default ShoppingListForm;
