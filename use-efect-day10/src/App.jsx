import logo from './logo.svg';
import './App.css';
import Api from './component/Api';
import { useEffect, useState } from 'react';

function App() {
  let [arr,setArr] = useState([]);
  let [state,setState] = useState('')
  let [searchQuery, setSearchQuery] = useState('');

  function handleChange(e) {
    let { value } = e.target;
    setState(value);
  }

  function handleAddProduct() {
    setSearchQuery(state);
  }
  useEffect(()=>{

    fetch(`https://www.omdbapi.com/?s=${state}&apikey=46e7855`)
    

    .then((res) => res.json())
    .then((el)=>{
      return(
        
        setArr(el.Search)
      )
    })
    .catch((err) => console.error('Error fetching data:', err));
 
  },[searchQuery])
  return (
    <div className="App">
      <input type="search" placeholder='search' name='s' onChange={handleChange} />
<button type="button" onClick={handleAddProduct}>SARCH</button>
     <Api data={arr}/>
    </div>
  );
}

export default App;
