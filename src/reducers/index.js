import { combineReducers } from "redux";
import ItemsReducer from "./reducer-items";

const rootReducer = combineReducers({
  books: ItemsReducer
});

export default rootReducer;
