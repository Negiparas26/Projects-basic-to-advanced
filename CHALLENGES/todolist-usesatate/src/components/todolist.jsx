import React, { useState } from "react";

function TodoList() {
  const [text, setText] = useState(""); // Store input text
  const [tasks, setTasks] = useState([]); // Store list of tasks

  // Function to add task
  const handleClick = () => {
    if (text.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { id: Date.now(), text, completed: false }]); // Add new task
    setText(""); // Clear input field
  };

  // Function to toggle strike-through via checkbox
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>Welcome to Todo List</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "5px",
              }}
            >
              {/* Checkbox for line-through */}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              {/* Task text with line-through effect */}
              <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
              </span>
              {/* Delete Button */}
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
