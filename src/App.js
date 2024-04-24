import { useState } from "react";
import './App.css'

const App = ()=>{
  const[counter , setCounter]=useState(10);
  const Increment = ()=>{
    setCounter(counter+1)
  }
  const Decrement = ()=>{
    setCounter(counter-1)
  }

  return(
    <>
    <div className="counterApp">
    <h1>Counter App</h1>
     <h1 className="count">{counter}</h1>
     <button onClick={Increment}>Increment</button>
     <button onClick={Decrement}>Decrement</button>
     </div>
    </> 
  )
}

export default App ;