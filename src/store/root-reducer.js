import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import {categoriesReducer} from "./categories/categoriesReducer";

export const rootReducer = combineReducers({
user: userReducer,
categories: categoriesReducer,
})