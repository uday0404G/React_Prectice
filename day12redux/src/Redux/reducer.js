import { dec, inc, inc2, inc5 } from "./actiontype"

const initial={
    count:0,
    count2:0,
    count5:0
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case inc:
            return {
                ...state,
                count:state.count+1
            }
        case dec:
            return {
                ...state,
            count:state.count - 1
            }
            case inc2:
                return{
                    ...state,
                    count2:state.count2+2       
                }
        
            case inc5:
                return{
                    ...state,
                    count5:state.count5+payload
                }
       default : return state
    }
}