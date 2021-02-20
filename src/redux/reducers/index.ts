import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

export const reducers = combineReducers({
  user: usersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
