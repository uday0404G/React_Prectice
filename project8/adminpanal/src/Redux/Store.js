import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./AdminProductReducer/Adminreducer";
import { UserReducer } from "./UserDetailsReducer/UserReducer";
const MainReducer=combineReducers({
  
    AdminReducer,
    UserReducer
    
})
export const store=legacy_createStore(MainReducer,applyMiddleware(thunk))   