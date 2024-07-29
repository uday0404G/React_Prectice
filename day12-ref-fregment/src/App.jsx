import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
    let a= useRef(0)
    const handleIncrement = () => {
      a.current++;
     
    };
  return (
    <div>
    <h1>{a}</h1>
    <button onClick={handleIncrement}>Increment</button>
  </div>
  );
}

export default App