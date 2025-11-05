import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CountValue from './components/Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  const clickMe = (func) => {
    func();
  }

  const incrementCounter = () => {
    setCount(count+1);
  }
  const decrementCounter = () => {
    setCount(count-1);
  }
  const resetCounter = () => {
    setCount(0);
  }

  return (
    <>
    <div>
      <h1>React Counter App</h1>
      {/* <p>Counter: {count} </p> */}
      <CountValue count={count} />
    </div>
    <div>
      <button onClick ={() => clickMe(incrementCounter)}>Increment</button>
      
      { count>0 &&
        <button onClick = {()=>clickMe(decrementCounter)}>Decrement</button>
      }

      {/* <button onClick = {()=>clickMe(decrementCounter)} disabled={count === 0} >Decrement</button> */}
      
    </div>
    <div>
      <button onClick={() => clickMe(resetCounter)}>Reset</button>
    </div>
   
    </>

  )
}

export default App
