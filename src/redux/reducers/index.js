import { combineReducers } from "redux";
import sideBarVisibility from "./uiReducer.js";
import userReducer from "./userReducer.js";

export default combineReducers({ sideBarVisibility, userReducer });
