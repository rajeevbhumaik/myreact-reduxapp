import { combineReducers } from "redux";
import reducer from "../reducers/reducer";
import fetchDataReducer from "../reducers/fetchDataReducer";

export default combineReducers({ reducer, fetchDataReducer });
