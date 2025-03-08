

// import React from 'react'
// import { useTask } from '../customHooks/useTask';

// const TaskItem = ({ task }) => {
//     const { dispatch } = useTask();
//   return (
//     <li>
//     <span
//       onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
//       style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
//     >
//       {task.text}
//     </span>
//     <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>❌</button>
//   </li>
//   )
// }

// export default TaskItem;


import React, { useState } from "react";
import { useTask } from "../customHooks/useTask";

const TaskItem = ({ task }) => {
  const { dispatch } = useTask();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim() !== "") {
      dispatch({ type: "EDIT_TASK", payload: { id: task.id, newText } });
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
            onKeyDown={(e) => e.key === "Enter" && handleEdit()} 
              //If the key is "Enter", the function handleEdit() gets triggered.
            /*  onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEdit();
                }
              }}*/
              
          />
          <button onClick={handleEdit}>✅</button>
        </>
      ) : (
        <>
          <span
            onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>✏ Edit</button>
          <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>❌</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
