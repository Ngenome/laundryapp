import { createStore, combineReducers } from "redux";
import { changeScreen } from "./actions";
import {
  ItemsReducer,
  LaundryCartReducer,
  NextScreenReducer,
  screenReducer,
  UserReducer,
} from "./reducers";
const prestore = combineReducers({
  change: screenReducer,
  auth: UserReducer,
  cart: ItemsReducer,
  laundryCart: LaundryCartReducer,
  nextScreen: NextScreenReducer,
});
const store = createStore(prestore);
export default store;
