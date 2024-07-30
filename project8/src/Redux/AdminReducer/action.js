import { json } from "react-router-dom"
import { ADD_Product, Load } from "./actiontype"


export const Adddata=(Dispatch)=>(obj)=>{
   Dispatch({type:Load})
   fetch(`http://localhost:3000/Products`,{
    method:"POST",
    headers:{
        "Content-Type":'aplication/json'
    },
    body:JSON.stringify(obj)
   })
   .then(res=>res.json())
   .then((res)=>{
        Dispatch({type:ADD_Product ,payload:res})
   })
   .catch((err)=>{
    console.log(err);
   })
}