// import ServerContext from "@react-navigation/native/lib/typescript/src/ServerContext";
import { createStore, combineReducers } from "redux";
import { changeScreen } from "./actions";
import {
  DrawerScreenReducer,
  ItemsReducer,
  LaundryCartReducer,
  NextScreenReducer,
  screenReducer,
  UserReducer,
} from "./reducers";
import { ServicesReducer } from "./reducers/services";
const prestore = combineReducers({
  change: screenReducer,
  auth: UserReducer,
  cart: ItemsReducer,
  laundryCart: LaundryCartReducer,
  nextScreen: NextScreenReducer,
  drawerScreen: DrawerScreenReducer,
  laundryServices: ServicesReducer,
});
const store = createStore(prestore);
export default store;
