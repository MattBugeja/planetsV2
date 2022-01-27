import { SET_PLANET_INDEX } from "./constants.js";

const initialState = {
  planetIndex: 0,
};

export default function planetIndexReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLANET_INDEX:
      return { ...state, planetIndex: action.data };
    default:
      return state;
  }
}
