import React, { createContext, useReducer} from 'react'
 export const myContext=createContext()
const inti=0
 export const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
        return state+1
        case 'SUB':
            return state-1
        
        default:
            return state
    }
        }
const Context = ({children}) => {
   const [state,dispatch]=useReducer(reducer,inti)
  return (
    <myContext.Provider value={{state,dispatch}}>
    </myContext.Provider>
  )
}

export default Context