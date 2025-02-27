import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [api, setApi] = useState({})

  const API="https://pokeapi.co/api/v2/pokemon/pikachu";

    const fetchpokemon=()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((data)=>{
          setApi(data);
        })
        .catch((err)=>console.log(err));


    };

    useEffect(()=>{
      fetchpokemon();
    },[])


    if(api){ 
      return (

        <>
        <section className='container'>
            <header>
    
              <h1>
                lets catch pokemon
              </h1>
            </header>
            <ul className='card-demo'>
              <li className='pokemon-card'>
                <figure>
                <img src={api.sprites.other.dream_world.front_default} alt={api.name} />
    
                </figure>
                <h1> {api.name}</h1>
                </li>
              
            </ul>
          
        </section>
          
        </>
      )
     }

  
}

export default App
