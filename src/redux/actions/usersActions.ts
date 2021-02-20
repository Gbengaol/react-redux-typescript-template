import { ActionType } from "../actionTypes";
import { User } from "../reducers/usersReducer";

interface SearchUsersAction {
  type: ActionType.GET_USERS;
}
interface SearchUsersSuccessAction {
  type: ActionType.GET_USERS_SUCCESS;
  payload: User[];
}
interface SearchUsersErrorAction {
  type: ActionType.GET_USERS_ERROR;
  payload: string;
}

export type UsersActions =
  | SearchUsersAction
  | SearchUsersSuccessAction
  | SearchUsersErrorAction;
