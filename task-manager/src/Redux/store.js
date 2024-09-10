
import { legacy_createStore } from "redux";
import taskReducer from "./reducer";

export const Store=legacy_createStore(taskReducer)