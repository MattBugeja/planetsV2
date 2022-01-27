import { SET_MENU, RESET_MENU } from "./constants.js";

const initialState = {
  menuIsOpen: false,
};

export default function MenuStateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENU:
      return {...state, menuIsOpen : true};
      case RESET_MENU:
        return {menuIsOpen : false};
    default:
      return state;
  }
}
