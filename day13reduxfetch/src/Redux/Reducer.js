import { initial } from "./actiontype";


export const reducer=(state=initial,{type,payload})=>{

        switch(type){
            case "Loading":
                return{
                    ...state,
                    isLoading:true
                }
            case "data1":
                return{
                    ...state,
                    data:payload,
                    isLoading:false
                }
            case "error":
                return{
                    ...state,
                    error:true
                }
            default :return {...state}        
        }

}