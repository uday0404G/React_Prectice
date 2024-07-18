import { Dec, Inc, Inc5 } from "./actiontype"




let initial = {
    count : 0,
    count2 : 0
}
const reducer = (state = initial,action)=>{
     
    switch(action.type){
        case Inc:
            return {
                ...state,
                count : state.count + 1
            }
        case Dec : 
            return {
                ...state,
                count : state.count - 1
            }
        case Inc5 : 
             return {
                ...state,
                count2 : state.count2 + 5
             }    
        default:
            return state        
    }


}

export default reducer