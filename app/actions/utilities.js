import { TOGGLE_LOADING, TOGGLE_SIDEBAR } from "../../constants/utilities";

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
