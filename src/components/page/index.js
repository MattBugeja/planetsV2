import CentreInformationContainer from "../../containers/centerInformationContainer";
import InnerMenuContainer from "../../containers/innerMenu";
import NavBarContainer from "../../containers/navBar";
import Images from "../molecules/images";
import classes from "./componentStyle.module.css";
import MenuModalContainer from "../../containers/menuModalContainer";
import AttributesContainer from "../../containers/attributesContainer";

function Page({ viewType, menuIsOpen }) {
  return (
    <div
      className={`${classes.grid} ${classes.height} ${classes.bgColor} ${classes.padding}`}
    >
      <div className={classes.navBarPosition}>
        <NavBarContainer />
      </div>

      {menuIsOpen ? <MenuModalContainer /> : null}

      <div className={classes.innerMenuPosition}>
        <InnerMenuContainer />
      </div>

      <div className={classes.imagesPosition}>
        <Images viewType={viewType} />
      </div>
      <div className={classes.centerInfoPosition}>
        <CentreInformationContainer />
      </div>
      <div className={classes.attributesPosition}>
        <AttributesContainer />
      </div>
    </div>
  );
}

export default Page;
