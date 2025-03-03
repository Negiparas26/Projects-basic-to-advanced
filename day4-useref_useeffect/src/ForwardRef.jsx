import React, { forwardRef, Fragment, useId, useRef } from 'react'





function ForwardRef() {

        
const usernameref=useRef(null);
const passwordRef=useRef(null);

const handleFormSubmit=(e)=>{
    e.preventDefault();
   
    const username = usernameref.current.value.trim();
    const password = passwordRef.current.value.trim();
    if(! username|| !password){
        alert("All fields are required!");
        return;
    }
    console.log(usernameref.current.value,passwordRef.current.value)
    usernameref.current.value = "";
    passwordRef.current.value = "";
}

  return (
    <>
    <form onSubmit={handleFormSubmit}>
    
    <ComponentofFordward  label="username" ref={usernameref}/>
    <ComponentofFordward  label="password" ref={passwordRef}/>
        <button>submit</button>
    </form>
   
    </>
  )
}

export default ForwardRef;


const ComponentofFordward=forwardRef((props,ref)=>{


    const id= useId();

    return (<>
    
    <label htmlFor={id}>{props.label}</label>
    <input type="text"  ref={ref}/>

    
    </>)
    
});
