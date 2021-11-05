import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const handleDeleteTask = (e) => {
    console.log(e)
    setTasks(tasks.filter((task) => task.text !== e))
  }
  const handleAdd = (e) => {
    setTasks([...tasks, e])
  }



  const visibleTasks = tasks.filter(task => category === "All" || task.category === category)



  return (
    <div className="App">

      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelect={setCategory} />

      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "ALL")}
        onTaskFormSubmit={handleAdd} />

      <TaskList
        tasks={visibleTasks}
        onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
