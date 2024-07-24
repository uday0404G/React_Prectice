
const initiolization={
    isLoading:false,
    data:[],
    error:false,
}
export const reducer=(state=initiolization,action)=>{
    switch(action.type){
        case "Loading":
        return {...state,isLoading:true}
        case "data" :
              return{...state,
                isLoading:false,
                data:action.payload}
        case "error":
            return{...state,error:true}      
        default:return{ ...state}    
    }
    
}