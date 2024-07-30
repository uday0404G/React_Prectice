
 const initialState = {
    count :0,
    count2:0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "inc":
    return { ...state,count:state.count+1}
    case "inc5":
        return {...state,count2:state.count2 +payload

        }    
  default:
    return state
  }
}
