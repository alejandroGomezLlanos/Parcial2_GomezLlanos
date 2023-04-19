import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleOnChange = (event) => {
    setNewCategory(event.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onAddCategory(newCategory);
    setNewCategory("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input type="text" onChange={handleOnChange} value={newCategory} />
    </form>
  );
};
