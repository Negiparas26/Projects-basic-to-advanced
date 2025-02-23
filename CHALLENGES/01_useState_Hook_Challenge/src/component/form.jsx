import { useState } from "react"

const Form=()=>{

     const [count, setCount] = useState(0)
     const[num,setNum]=useState(1)

    const handleinc=()=>{
        setCount(prev=>prev+num)
    };

    const handledec=()=>{
        setCount(prev=>prev-num)
    };

    const handlereset=()=>{
        setCount(0)
    };

return(
<div>

    <p><span>{count}</span></p>
        <h1> pick a number </h1>
        
        <label htmlFor="">enter a number </label>
        <input type="number" value={num}onChange={(e)=>setNum(Number(e.target.value))}/>
        <br />
        <br />
        <div>
        <button className="btn" onClick={handleinc} disabled={count+num>100}>INCREMENT</button>
        <button  className="btn" onClick={handledec} disabled={count-num<0}>DECREMENT</button>
        <button  className="btn" onClick={handlereset}>RESET</button>
        </div>
        

</div>

)
    

}

export default Form;