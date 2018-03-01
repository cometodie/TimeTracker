import { TOGGLE_LOADING, TOGGLE_SIDEBAR, SET_SNACKBAR } from "../../constants/utilities";

export const setLoading = status => {
  return {
    type: TOGGLE_LOADING,
    payload: status
  };
};

export const toggleSidebar = status => {
  return {
    type: TOGGLE_SIDEBAR,
    payload: status
  };
};

export const setSnackBar = status => {
  console.log(status);
  return {
    type: SET_SNACKBAR,
    payload: status
  };
};
