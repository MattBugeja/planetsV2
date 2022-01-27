import MenuItemContainer from "../../../containers/menuItemContainer";
import useCheckMobileScreen from "../../../utils/screenSizeCheck";
import Logo from "../../atoms/logo";
import { ReactComponent as MenuIcon } from "./assets/icon-hamburger.svg";
import classes from "./componentStyle.module.css";


function NavBar({ click, data }) {

  const isMobile = useCheckMobileScreen()
  return (
    <div className={`${classes.componentFlex} ${classes.padding}`}>
      
      <Logo text={"The Planets"} />

      {isMobile ? 

      <MenuIcon onClick={click}/> :
      
      <div className={classes.flex}>
        {data.map((planet, index) => (
          <MenuItemContainer key={index} planetName={planet.name} />
        ))}
      </div>
    }
    </div>

  );
}

export default NavBar;
