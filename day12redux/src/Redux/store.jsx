import { legacy_createStore } from "redux";
import reducer from "./action";

export const store=legacy_createStore(reducer)