

export const fetchdata=(dispatch)=>{
    dispatch({type:"Loading"})
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((res)=>res.json())
  .then((res)=>{
    dispatch({type:"data1",payload:res})
    
  })
  .catch((err)=>{
    dispatch({type:"error"})
  })
}