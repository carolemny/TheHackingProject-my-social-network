import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
  LOGOUT_USER,
  UPDATE_USER,
} from "./loginTypes";

export const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};

export const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
