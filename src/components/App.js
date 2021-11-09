import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
//storing the task and the category to these state
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  //handles the delete button that im gonna pass as  a prop
  const handleDeleteTask = (e) => {
    // if the task.text match the selected task dont add it
    setTasks(tasks.filter((task) => task.text !== e))
  }
  // using the spread operator to add the new task and the old task
  const handleAdd = (e) => {
    setTasks([...tasks, e])
  }


//filtring the tasks via categories
  const visibleTasks = tasks.filter(task => category === "All" || task.category === category)



  return (
    <div className="App">

      <h2>My tasks</h2>
      {/* category component and passing the categories, selectedCategory and onSelect as a prop */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelect={setCategory} />

      <NewTaskForm
        // newTasForm component and impassing categories and onTaskFormSubmit (handles the add task) as a props
        categories={CATEGORIES.filter(cat => cat !== "ALL")}
        onTaskFormSubmit={handleAdd} />

      <TaskList
        //taskList comonent that have the tasks(visible task depends on the users category choice) and the onDelete as a prop
        tasks={visibleTasks}
        onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
