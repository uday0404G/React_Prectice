
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './Redux/actiontype';
import { count } from './Redux/action';


function App() {
  const dispatch=useDispatch()
  const obj=useSelector(s=>s)
  console.log(obj);

  return (
    <>
    <h1>{obj.count}</h1>
    <h1>{obj.count2}</h1>
   <button onClick={()=>dispatch({type:inc})}>+</button>
   <button disabled={obj.count==0} onClick={()=>dispatch({type:dec})}>-</button>
   <button onClick={()=>dispatch(count())}>+2</button>
    </>
  ) 
}

export default App
