import { taskReducer, initialState } from "./taskReducer"; // Import reducer separately
import React, { createContext, useReducer, useEffect } from "react";


// Load initial tasks from localStorage
const loadTasks = () => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : initialState;
};



// Create Context
export const TaskContext = createContext();




export const TaskProvider = ({ children }) => {

  const [tasks, dispatch] = useReducer(taskReducer, [], loadTasks);
  // Save tasks to localStorage whenever tasks change
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};


// // Custom Hook
// export const useTask = () => useContext(TaskContext);
//is show a warning that use this custom hook in seperate file::
