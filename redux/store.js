import { createStore, combineReducers } from "redux";
import { changeScreen } from "./actions";
import {
  ItemsReducer,
  LaundryCartReducer,
  screenReducer,
  UserReducer,
} from "./reducers";
const prestore = combineReducers({
  change: screenReducer,
  auth: UserReducer,
  cart: ItemsReducer,
  laundryCart: LaundryCartReducer,
});
const store = createStore(prestore);
export default store;
