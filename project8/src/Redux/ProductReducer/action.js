import { Data, Error, Load } from "./actiontype"


export const ProductData=(dispatch)=>{
    dispatch ({type:Load})
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type:Data,payload:res})
    })
    .catch((err)=>{
        dispatch({type:Error})
    })
}