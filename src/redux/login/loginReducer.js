import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  LOGOUT_USER,
  UPDATE_USER,
} from "./loginTypes";

import Cookies from "js-cookie";

const initialState = {
  loggedIn: !!Cookies.get("token"),
  loading: false,
  error: "",
  userId: Cookies.get("userId"),
  userToken: Cookies.get("token"),
  profileUpdated: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_USER_SUCCESS:
      /* console.log(action); */
      return {
        ...state,
        loggedIn: true,
        loading: false,
        error: "",
        userId: action.user.user.id,
        userToken: action.user.jwt,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.error,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        error: "",
        userId: "",
        userToken: "",
      };
    case UPDATE_USER:
      return {
        ...state,
        /* loggedIn: false,
        error: "",
        userId: "",
        userToken: "", */
        profileUpdated: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
