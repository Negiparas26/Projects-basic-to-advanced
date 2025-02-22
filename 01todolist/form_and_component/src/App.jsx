import { useState } from 'react'
import Card from './components/card'
import Form from './components/Form';
import './App.css'

function App() {
  
const [Cart, setCart] = useState([{ name: "paras", age: 24 }]);

const gencart=(naming,age)=>{
  
  const newobj={
     name:naming,
  age:age
  }
  setCart([...Cart,newobj])

}

  return (
    <>
      <div>
      <Form  gencart={gencart}/>
        <div>
          {Cart.map((e,index)=>(
              <Card key={index} name={e.name} age={e.age}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
