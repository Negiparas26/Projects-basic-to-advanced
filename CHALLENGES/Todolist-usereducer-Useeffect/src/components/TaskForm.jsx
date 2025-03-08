import React, { useState } from 'react'
import { useTask } from '../customHooks/useTask';

const TaskForm=()=> {
    const [text,setText]=useState('');
    const{dispatch}=useTask();

//handleTask
const handleAddTask=()=>{
if(text.trim()!==""){
    dispatch({type: "ADD_TASK", payload: text});
    setText('');
}

};

  return (
    <div>
        <input type="text" placeholder='Enter TASk ....' value={text} onChange={(e)=>setText(e.target.value)} />     
        <button onClick={handleAddTask}>Add Task</button>

    </div>
  )
}

export default TaskForm;