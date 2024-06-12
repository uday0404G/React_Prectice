import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Api from './component/api';

function App() {
  let [state,setState] = useState(true);
  let [login,setLogin] = useState(false)
  let [arr,setArr] = useState([])
  useEffect(()=>{
    setLogin(true)
    fetch(`https://randomuser.me/api/`)
    .then(res=>res.json())
    .then((res)=>{
      setArr(res.results)
    
    setLogin(false)
    })
    
  },[state])

  return (
    <div className="App">
      {login && 
    <h1>Loding...</h1>}
<div>

     <Api arr={arr}/>
    <button type="button" onClick={() => setState(!state)}>fetch</button>
</div>
    
    </div>
  );
}

export default App;
