import React, { useState } from 'react'

function NewTodo() {
    const [text,setText]=useState("");
    const[list,setList]=useState([]);
    
//handle add task 
   const  handleClickButton=()=>{
     if(text.trim()=== "") return;
     setList([ ...list,{ id: Date.now(), text, completed: false }]);
     setText('');
   }

   // handle checkbox
   const toggleTask=(id)=>{
    setList(
        list.map((e)=>(e.id===id ?  { ...e, completed: !e.completed } : e))
    )
   }

   //handle delete task
   const deleteTask=(id)=>{
        setList(list.filter((e) => e.id !== id));
   }
    
  return (
  <>
        <h1>welcome to todolist</h1>
        <div>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={handleClickButton}>add</button>
        </div>
        <div>
            <ul>
                {list.map((e)=>(
                <li key={e.id}   style={{display: "flex",alignItems: "center",gap: "10px",}}>
                    <input type="checkbox"    checked={e.completed}  onChange={() => toggleTask(e.id)}/>
                     <span style={{ textDecoration: e.completed ? "line-through" : "none" }}>{e.text}</span>      
                     <button onClick={() => deleteTask(e.id)}>❌</button>   
                </li>
                ))}
            </ul>
        </div>
  
  </>


  )
}

export default NewTodo