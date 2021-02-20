import { ActionType } from "../actionTypes";
import { Dispatch } from "redux";
import { UsersActions } from "../actions/usersActions";
import { getData } from "../../apis/apiMethods";

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersActions>) => {
    dispatch({
      type: ActionType.GET_USERS,
    });

    try {
      const users = await getData(`/users`);
      dispatch({
        type: ActionType.GET_USERS_SUCCESS,
        payload: users,
      });
    } catch (error) {
      dispatch({
        type: ActionType.GET_USERS_ERROR,
        payload: error.message,
      });
    }
  };
};
