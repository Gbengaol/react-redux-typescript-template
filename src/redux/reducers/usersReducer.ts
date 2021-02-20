import { UsersActions } from "../actions/usersActions";
import { ActionType } from "../actionTypes";

export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

interface UsersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return { ...state, loading: true, data: [] };
    case ActionType.GET_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionType.GET_USERS_ERROR:
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
