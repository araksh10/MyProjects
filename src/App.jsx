import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((previousC) => previousC+1);
  }
  
  const Decrement = () => {
    setCount((previousC) => previousC-1);
  }
  
  return (
    <>
      <div className='logo'>
        <h1>MOD_ONE COUNTER</h1>
      </div>

      <div className="card">
        <h3>Your count is: <span>{count}</span></h3>
      </div>

      <div className="buttonHolder">
        < Button handle={() => {Increment()}} >Increment</Button>
        <Button handle={() => {Decrement()}}>Decrement</Button>
      </div>

      <p className="read-the-docs">
        I will update this part later!
      </p>
    </>
  )
}

export default App
