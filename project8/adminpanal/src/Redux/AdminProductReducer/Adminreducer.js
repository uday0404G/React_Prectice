import { ADD_Product, Delete, Edit, Error, Load,Show } from "./actiontype"


const initial={
    isLoading:false,
    data:[],
    error:false,
    Show:[],
    Edit:[],
    Delete:[],
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
            case Show:return{
                ...state,
                Show:payload,
                isLoading:false
            }
            case Edit:return{
                ...state,
                Edit:payload,
                isLoading:false
            }
            case Delete:return{
                ...state,
                Delete:payload,
                isLoading:false
            }

            default :return state
        }
}