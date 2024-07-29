import { Data, Error, Load } from "./actiontype";

const initialState = {
    isLoading:false,
    data:[],
    error:false
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
     case Load:
      return{
        ...state,
        isLoading:true
      }
      case Data:return{
        ...state,
        data:action.payload,
        isLoading:false

      }
      case Error:
        return{
          ...state,
          error:true
      }
      default :return state

    }
  }
  
  export default rootReducer;
  