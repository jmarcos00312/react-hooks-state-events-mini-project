import React from "react";
import Task from "./Task"
//destructuring the props
function TaskList({ tasks, onDelete }) {
//for all the tasks from the prop map it and call Task component
  const taskLists = tasks.map((task, index) => {
    //sending key, text, category and onDelete as a prop to task
    return <Task
      key={index}
      text={task.text}
      category={task.category}
      onDelete={onDelete} />
  })

  return (
    <div className="tasks">
      {taskLists}
    </div>
  );
}

export default TaskList;
