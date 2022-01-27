import { SET_MENU, RESET_MENU  } from "./constants";

export const setMenu = () => {
  return { type: SET_MENU};
};

export const resetMenu = () => {
  return { type: RESET_MENU};
};
