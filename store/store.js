import { combineReducers,legacy_createStore } from "redux";
import userReducer from "./userReducer";
const rootReducer=combineReducers({
    userData:userReducer
})
export const store=legacy_createStore(rootReducer)