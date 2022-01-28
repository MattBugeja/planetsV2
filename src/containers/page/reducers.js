import { SET_IS_MOBILE } from "./constants.js";

const initialState = {
  isMobile: false,
};

export default function isMobileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_MOBILE:
      return { isMobile: action.data };
    default:
      return state;
  }
}
