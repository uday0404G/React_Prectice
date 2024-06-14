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
    
      <div id="preloader">
    <div class="line"></div>
  </div>
  
     }
     
<div >

     <Api arr={arr}/>
     <div className='text-center pt-4'>

    <button type="button" className='btn btn-lg btn-outline-warning' onClick={() => setState(!state)}>Fetch</button>
     </div>
</div>
    
    </div>
  );
}

export default App;
