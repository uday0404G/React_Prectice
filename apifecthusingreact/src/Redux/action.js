

   export const data=(dispatch)=>{
        dispatch({type:"Loading"})
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then(res=>{
            dispatch({type:"data",payload:res})
        })
        .catch((err)=>{
            dispatch({type:"error"})
        })
    }