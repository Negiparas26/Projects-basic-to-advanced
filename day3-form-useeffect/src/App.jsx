import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    // Create an interval
    const interval = setInterval(() => {
      setDate(new Date().toUTCString());
    }, 1000);
                                                                                           // console.log("count");
                                                                                           // console.log(count);
    // console.log(date);                                                                           |
    // Cleanup function to clear interval when component unmounts                                   |
    return () => clearInterval(interval);                                       //                  |
   
  }, []);  
  useEffect(()=>{
    const option =setInterval(()=>{
      setCount((prev)=>prev+1);
  
     },1000);
     return ()=>clearInterval(option); 
  },[])
 
 console.log(count);
  return (
    <>
      <div>
        <h1>Date: {date}</h1>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
