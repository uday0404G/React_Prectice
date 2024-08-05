import axios from "axios"
import { userdata, UserError, UserLoad,UserDelete } from "./actiontype"

export const ShowData=(dispatch)=>{
    dispatch({type:UserLoad})
    axios(`http://localhost:3000/UserData`)
    .then((res)=>{
        dispatch({type:userdata,payload:res.data})
    })
    .catch((er)=>{
        dispatch({type:UserError})
    })
}
export const DeleteData=(dispatch)=>(id)=>{
    dispatch({type:UserLoad})
    axios.delete(`http://localhost:3000/UserData/${id}`)
    .then((res)=>{
        dispatch({type:UserDelete,payload:res.data})
    })
    .catch((er)=>{
        dispatch({type:UserError})
    })
}