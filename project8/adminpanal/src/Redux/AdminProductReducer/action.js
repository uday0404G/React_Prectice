import { json, useNavigate } from "react-router-dom"
import { ADD_Product, Delete, Edit, Error, Load, Show } from "./actiontype"
import axios from "axios"


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
    Dispatch(Error)
   })
}
export const Showdata=(Dispatch)=>{
    Dispatch({type:Load})
    axios.get(`http://localhost:3000/Products`)
    .then((res)=>{
        Dispatch({type:Show,payload:res.data})
    })
    .catch((err)=>{
        Dispatch(Error)
    })
}
export const Deletedata=(Dispatch)=>(id,nav)=>{
    Dispatch({type:Load})
    axios.delete(`http://localhost:3000/Products/${id}`)
    .then((res)=>{
        Dispatch({type:Delete,payload:res.data})
        
    })
    .catch((err)=>{
        Dispatch(Error)
    })
}
export const Editdata=(Dispatch)=>async(id,obj)=>{
    Dispatch({type:Load})
    try{

        const response= await axios.put(`http://localhost:3000/Products/${id}`,obj);
        dispatch({ type: Edit, payload: response.data });
    }
        catch(err){
            Dispatch(Error)
        }
}