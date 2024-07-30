import { Data, Error, Load } from "./actiontype"


export const ProductData=(dispatch)=>{
    dispatch ({type:Load})
    fetch(`http://localhost:3000/Products`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:Data,payload:res})
    })
    .catch((err)=>{
        dispatch({type:Error})
    })
}
export const SingProductData=(dispatch)=>(id)=>{
    dispatch ({type:Load})
    fetch(`http://localhost:3000/Products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:Data,payload:res})
    })
    .catch((err)=>{
        dispatch({type:Error})
    })
}