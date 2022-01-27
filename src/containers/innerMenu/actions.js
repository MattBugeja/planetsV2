import { SET_VIEW_TYPE } from "./constants";

export const setViewType = (viewType) => {
  return { type: SET_VIEW_TYPE, data: viewType };
};
