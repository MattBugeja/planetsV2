import { SET_PLANET_INDEX, SET_PLANET_NAME } from "./constants";

export const setPlanetIndex = (planetIndex) => {
  return {
    type: SET_PLANET_INDEX,
    data: planetIndex,
  };
};

export const setPlanetName = (planetName) => {
  return {
    type: SET_PLANET_NAME,
    data: planetName,
  };
};
