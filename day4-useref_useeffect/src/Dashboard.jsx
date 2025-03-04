import React, { useContext } from 'react'
import Usercontext from './userContext'



function Dashboard() {
    const Pointer= useContext(Usercontext)
  return (
    <div>
        <h1>Dashboard</h1>
        <p> {Pointer.state.name}</p>
        <p>{Pointer.state.email}</p>
        <p>{Pointer.state.age}</p>
        <button onClick={Pointer.handlestate} > submit</button>
    </div>
  )
}

export default Dashboard