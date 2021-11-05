import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: '',
    category: "Code"
  })
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    onTaskFormSubmit(newTask)
    setFormData({
      text: '',
      category: "Code"
    })
  }






  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select value={formData.category} onChange={handleChange}>
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
