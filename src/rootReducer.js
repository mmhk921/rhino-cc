import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import SearchReducer from "./Components/Search/SearchReducer";

const rootReducer = combineReducers({
  state: (state = {}) => state,
  form,
  SearchReducer,
});

export default rootReducer;
