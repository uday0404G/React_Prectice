import { ADD_Product, Error, Load, ShowProduct } from "./actiontype"


const initial={
    isLoading:false,
    data:[],
    error:false,
    product:[]
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
            case ShowProduct:return{
                ...state,
                product:payload,
                isLoading:false
            }
            default :return state
        }
}