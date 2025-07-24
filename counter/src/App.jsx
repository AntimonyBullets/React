import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10);

  const increaseValue = ()=>{
    if(count < 20) setCount(count + 1);
  }

  const decreaseValue = ()=>{
    if(count > 0) setCount(count - 1);
  }
  return (
    <>
      <h2>Count is {count}</h2>
      <br />
      <button onClick={increaseValue}>Increase count</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease count</button>
    </>
  )
}

export default App
