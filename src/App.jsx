import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // logic
const [counter, setCounter] = useState(10)



  const increase = ()=>{
    setCounter(counter+1)
  }

  const decrease = () =>{
    setCounter(counter-1)
  }

 

     

  console.log(counter)
  return (
    <>
    <div>{counter}</div>
    <div onClick={increase}>+</div>
    <div onClick={decrease}>-</div>
   
    
    </>
  )  
}

export default App;
