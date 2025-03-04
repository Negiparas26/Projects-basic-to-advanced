
import './App.css'
import Dashboard from './Dashboard'
import StoreContext from './storeContext'

function App() {
 
  return (
    <div>
 <StoreContext>
     <Dashboard/>

   </StoreContext>


    </div>
  
  )
}

export default App
