import { combineReducers } from "redux";
import sideBarVisibility from "./uiReducer.js";
import userReducer from "./userReducer.js";
import projectReducer from "./projectReducer.js";

export default combineReducers({ sideBarVisibility, userReducer,projectReducer });
