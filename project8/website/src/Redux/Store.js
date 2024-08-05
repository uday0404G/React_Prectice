import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import rootReducer from "./ProductReducer/reducer";
import { thunk } from "redux-thunk";
import { AdminReducer } from "./AdminReducer/Adminreducer";
import { RegReducer } from "./RegistrationReducer/RegReducer";
const MainReducer=combineReducers({
    rootReducer,
    AdminReducer,
    RegReducer
})
export const store=legacy_createStore(MainReducer,applyMiddleware(thunk))   