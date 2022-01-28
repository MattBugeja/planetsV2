import { SET_PLANET_INDEX, SET_PLANET_NAME } from "./constants.js";

const initialState = {
  planetIndex: 0,
  planetName: "mercury",
};

export default function planetIndexReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLANET_INDEX:
      return { ...state, planetIndex: action.data };
    case SET_PLANET_NAME:
      return { ...state, planetName: action.data };
    default:
      return state;
  }
}
