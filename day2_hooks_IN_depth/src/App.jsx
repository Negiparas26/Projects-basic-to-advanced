import { useState,useEffect } from 'react'

import './App.css'

function App() {
//  let counter=0;
  const [count, setCount] = useState(0)
const incrementcount=()=>{
  // counter++;
  // console.log("this counter is rendering  ",counter)
  setCount(prev=>prev+1)
} 
useEffect(() => {
  console.log("Component mounted"); // Runs only on first render
}, []);


  return (
    <>
      {count}
      <br></br>
      <button onClick={incrementcount}> INCREMENT</button>
    </>
  )
}

export default App
