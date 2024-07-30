import { inc2, inc5 } from "./actiontype"


export const count=()=>{
    return{type:inc2}
}
export const count1=()=>{
    return{type:inc5,payload:50}
}