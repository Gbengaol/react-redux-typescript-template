import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { usersActionCreators } from "../redux";

export const useUserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(usersActionCreators, dispatch);
};
