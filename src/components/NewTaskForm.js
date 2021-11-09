import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  //making a new task with the text and category
  const [formData, setFormData] = useState({
    text: '',
    category: "Code"
  })

  //handles when user input something on the form
  const handleChange = (e) => {
    setFormData({
      //adding the inputs to formData
      ...formData, [e.target.name]: e.target.value
    })
  }
  //when they submit
  const handleSubmit = (e) => {
    e.preventDefault()
    //making a bew object so its easier to pass to onTaskFormSubmit
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    //onTaskFOrmSubmit is the handleAdd that i made in App.js
    onTaskFormSubmit(newTask)
    setFormData({
      //after they submit the form will be empty again
      text: '',
      category: "Code"
    })
  }






  return (
    //calling handleSubmit if they submit the form
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        {/* everytime user type something in it, it  will catch it and call the handleChange and it will be saved as text in formData */}
        <input
          type="text"
          name="text"
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        {/* everytime the user type something in it, it will catch it call handleChange and it will be saved as the category in formData */}
        <select value={formData.category} onChange={handleChange}>
          {/* mapping thru the categories props that was send from App.js */}
          {categories.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
