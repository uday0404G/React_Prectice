import { userdata, UserDelete, UserError, UserLoad } from "./actiontype";



const initial={
    Userdata:[],
    isLoading:false,
    Error:false,
    Delete:[]
}

 export const UserReducer=(state=initial,{type,payload})=>{
    switch(type){
        case userdata:return{
            ...state,
            Userdata:payload,
            isLoading:false
        }
        case UserDelete:return{
            ...state,
            Delete:payload
        }
        case UserLoad:return{
            ...state,
            isLoading:true
        }
        case UserError:return{
            ...state,
            Error:true
        }
        default:return state
    }
 }