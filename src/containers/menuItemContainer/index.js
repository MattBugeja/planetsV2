import MenuItem from "../../components/atoms/menuItem";
import { setPlanetIndex, setPlanetName } from "./actions";
import { resetMenu } from "../navBar/actions";
import { useSelector, useDispatch } from "react-redux";
import data from "../../data.json";

function MenuItemContainer({ planetName }) {
  const isMobile = useSelector((state) => state.isMobile.isMobile);
  const dispatch = useDispatch();
  const activePlanet = useSelector((state) => state.planetInfo.planetName);
  const planetIndex = useSelector((state) => state.planetInfo.planetIndex);
  const activePlanetBorder = data[planetIndex].theme.border;

  const getPlanetIndex = (planetName) => {
    return data.findIndex((planet) => planet.name === planetName);
  };

  const dispatchSetPlanetInfo = () => {
    dispatch(setPlanetIndex(getPlanetIndex(planetName)));
    dispatch(setPlanetName(planetName));
    dispatch(resetMenu());
  };

  return (
    <MenuItem
      isMobile={isMobile}
      activePlanet={activePlanet}
      activePlanetBorder={activePlanetBorder}
      planetName={planetName}
      click={() => {
        dispatchSetPlanetInfo(planetName);
      }}
    />
  );
}

export default MenuItemContainer;
