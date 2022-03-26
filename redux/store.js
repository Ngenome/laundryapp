import { createStore, combineReducers } from "redux";
import { changeScreen } from "./actions";
import { screenReducer, UserReducer } from "./reducers";
const prestore = combineReducers({
  change: screenReducer,
  auth: UserReducer,
});
const store = createStore(prestore);
export default store;
