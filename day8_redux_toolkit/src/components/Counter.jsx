import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incbyamount, increment } from '../features/navbar';

const Counter = () => {

    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();



  return (
    <div>
        <h2>        Counter :{count}        </h2>
        <button onClick={()=>dispatch( increment())}>add +</button>
        <button onClick={()=>dispatch( decrement())}>dec -</button>
        <button onClick={()=>dispatch( incbyamount(5))}>add +5</button>
        
        </div>
  )
}

export default Counter;