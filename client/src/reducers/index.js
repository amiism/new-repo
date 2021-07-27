import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import bookReducer from "./bookReducer";
import forumReducer from "./forumpostReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  books: bookReducer,
  forumposts: forumReducer,
});