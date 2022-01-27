import { SET_PLANET_INDEX } from "./constants";

export const setPlanetIndex = (planetIndex) => {
  return { 
    type: SET_PLANET_INDEX, data: planetIndex };
};
