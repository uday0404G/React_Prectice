import axios from "axios"
import { Regerror, RegLoad } from "./actiontype"

export const Loginauth=(Dispatch)=>(obj)=>{
    Dispatch({type:RegLoad})
    if(obj.email){
        axios(`http://localhost:3000/UserData?email=${obj.email}`)
        .then((res)=>res.data)
        .then((data)=>{
            
                if(data[0].Password==obj.password&&data[0].Email==obj.email){
                    alert("login success")
                    localStorage.setItem("isLogin",true)
                }
                else{
                    alert("Password OR UserName is Incorrect")
                }
                
                    
                })
        .catch((err)=>{
            Dispatch({type:Regerror})
        })
    }
} 