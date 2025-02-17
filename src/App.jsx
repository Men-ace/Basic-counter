import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // logic
const [counter, setCounter] = useState(10)
const[num1] = useState(0)
const[num2] = useState(0)
const [result] = useState(null)

  const increase = ()=>{
    setCounter(counter+1)
  }

  const decrease = () =>{
    setCounter(counter-1)
  }

 

     
 console.log(result)
  console.log(counter)
  return (
    <>
    <div>{counter}</div>
    <div onClick={increase}>+</div>
    <div onClick={decrease}>-</div>
    <input type="number" value={num1} />
    <input type="number" value={num2} />
    
    <p>Result: {num1 * num2}</p>
    
    </>
  )  
}

export default App;
