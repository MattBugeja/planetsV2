import { SET_VIEW_TYPE } from "./constants.js";

const initialState = {
  viewType: "overview",
};

export default function viewTypeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return { ...state, viewType: action.data };
    default:
      return state;
  }
}
