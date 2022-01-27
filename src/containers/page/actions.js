import { SET_IS_MOBILE } from "./constants";

export const setIsMobile = (isMobile) => {
  return { type: SET_IS_MOBILE, data: isMobile };
};
