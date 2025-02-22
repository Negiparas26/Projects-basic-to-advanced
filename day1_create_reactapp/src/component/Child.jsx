const Greeting =(props)=>{


    return(
        <>
        <h1>hello,{props.name}</h1>
        <h2>your age is ,{props.age}</h2>
        <p>{props.message}</p>
        </>
    )
}
export default Greeting;