import React from 'react'
import { useTask } from '../customHooks/useTask';
import TaskItem from "./TaskItem";

const TaskList=()=> {
    const {tasks}=useTask();

  return (
  <ul>
    {
        tasks.map((e)=>(
            <TaskItem key={e.id} task={e}/>
        ))
    }
  </ul>
  )
};

export default TaskList;