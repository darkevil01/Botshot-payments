import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import gatewayInfo from "./slice/gatewayInfo";
import userInfo from "./slice/userInfo";

const rootReducer = combineReducers({
  routing: routerReducer,
  userInfo,
  gatewayInfo,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
