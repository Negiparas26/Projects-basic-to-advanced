/*
what i have to cover in this todo list
creation of todo app 
* useReducer ,Context api
* custom Hooks 
* Dark Mode Toggle
* Local STorage 
* Display live (DATE & Time)

*/


import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <DarkModeToggle /> {/* Dark mode toggle */}
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
