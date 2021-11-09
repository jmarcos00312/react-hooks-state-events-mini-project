import React from "react";
//destructuring the props
function Task({ text, category, onDelete }) {
  //handles the delete and calling onDelete so I can access it from the App.js
  const handleDelete = () => {
    //onDelete is the function where we filter the state tasks
    onDelete(text, category)

  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* calling handleDelete when the button is pressed */}
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
