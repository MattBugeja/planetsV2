import MenuItem from "../../components/atoms/menuItem";
import { setPlanetIndex } from "./actions";
import { resetMenu } from "../navBar/actions";
import {useSelector, useDispatch } from "react-redux";
import data from "../../data.json";


function MenuItemContainer({ planetName }) {
  const isMobile = useSelector((state)=>state.isMobile.isMobile)
  const dispatch = useDispatch();

  const getPlanetIndex = (planetName) => {
    return data.findIndex((planet) => planet.name === planetName);
  };

  const dispatchSetPlanetIndex = () => {
    dispatch(setPlanetIndex(getPlanetIndex(planetName)));
    dispatch(resetMenu());
  };

  return (
    <MenuItem
    isMobile={isMobile}
      planetName={planetName}
      click={() => {
        dispatchSetPlanetIndex(planetName);
      }}
    />
  );
}

export default MenuItemContainer;
