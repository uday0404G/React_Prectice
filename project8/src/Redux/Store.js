import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import rootReducer from "./ProductReducer/reducer";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./AdminReducer/Adminreducer";
const MainReducer=combineReducers({
    rootReducer,
    AdminReducer
})
export const store=legacy_createStore(MainReducer,applyMiddleware(thunk))   