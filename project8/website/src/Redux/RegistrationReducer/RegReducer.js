import { Regdata, Regerror, RegLoad } from "./actiontype"

const intial={
    isLoading:false,
    data:[],
    error:false
}
  export  const RegReducer=(state=intial,{type,paylod})=>{
        switch(type){
            case RegLoad:return{
                ...state,
                isLoading:true
            }
         case Regdata:return{
                ...state,
                isLoading:false,
                data:paylod
            }
          case Regerror:return{
            ...state,
            error:true
          }  
          default:return state
        }

    }