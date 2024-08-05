import axios from "axios"
import { Regdata, Regerror, RegLoad } from "./actiontype"

   export const SignupData=(dispatch)=>(obj)=>{
    dispatch({type:RegLoad})
    axios.post(`http://localhost:3000/UserData`,(obj))
    .then((res)=>{
        dispatch({type:Regdata,payload:res.data})
        localStorage.setItem("isLogin",true)
    })
    .catch((err)=>{
        dispatch({type:Regerror})
    })

    }
