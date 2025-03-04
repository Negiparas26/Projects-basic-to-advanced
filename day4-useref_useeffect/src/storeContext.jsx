
import React, { useState } from 'react'
import Usercontext from './userContext'

function StoreContext({children}) {

    const [state,setState]= useState({
        name:'paras',
        email:'parasnegi222@gmail.com',
        age:23,
    })

const handlestate=(e)=>{
    e.preventDefault()
    setState({
        name:'negi',
        email:'negi222@gmail.com',
        age:11111,
    })
}

  return (

    <Usercontext.Provider  value={ {state,handlestate}} >
        
        {children}
    </Usercontext.Provider>
   
  )
}

export default StoreContext