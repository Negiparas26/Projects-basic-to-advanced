

import { useReducer } from 'react';
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
//initialValue is a object 
  const initialValue={
    count:0,
    inc:2,
    dec:2,

  };

  const reducer=(state,action)=>{

    switch(action.type){
      case"increment":
          
          return {    ...state,count:state.count +state.inc};
      case "decrement":
        return {  ...state,count:state.count -state.dec};
      case"reset":
            return{...state,count:0};

        default:
            return state;


    }


  }
const [state,dispatch]=useReducer(reducer,initialValue);



  return (
    <>
     <div> hi this is usereducer hook explain</div>
     <p>{state.count}</p>
     <button onClick={()=>dispatch({type: 'increment'})}>increment</button>
     <button onClick={()=>dispatch({type: 'decrement'})}>decrement</button>
     <button onClick={()=>dispatch({type: 'reset'})}>reset</button>
    </>
  )
}

export default App
