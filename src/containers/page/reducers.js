import { SET_IS_MOBILE, RESET_IS_MOBILE} from "./constants.js";
import { useDispatch } from "react-redux";
import { setIsMobile } from "./actions.js";
import useCheckMobileScreen from "../../utils/screenSizeCheck.js";

const initialState = {
  isMobile: false,
};

export default function isMobileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_MOBILE:
      return {isMobile : action.data};
      // case RESET_IS_MOBILE:
      //   return {isMobile : false};
    default:
      return state;
  }
}
