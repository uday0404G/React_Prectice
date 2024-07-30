import { ADD_Product, Error, Load } from "./actiontype"


const initial={
    isLoading:false,
    data:[],
    error:false
}
export const AdminReducer=(state=initial,{type,payload})=>{
        switch(type){
            case ADD_Product:return{
                ...state,
                data:payload,
                isLoading:false
            }
            case Load:return{
                ...state,
                isLoading:true
            }
            case Error:return{
                ...state,error:true
            }
            default :return state
        }
}