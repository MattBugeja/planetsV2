import classes from "./componentStyle.module.css";
import borders from "../../../components/borders.module.css";
import InnerMenuButton from "../../atoms/innerMenubutton";

function InnerMenu({ menuTitles, click }) {
  const menuTitle = menuTitles;
  return (
    <div
      className={`${classes.flex} ${borders.borderPaleWhiteSM} ${classes.width} ${classes.margin}`}
    >
      {menuTitle &&
        menuTitle.map((menuTitle, index) => (
          <InnerMenuButton key={index} title={menuTitle} click={() => {click(menuTitle)}}  />
        ))}
    </div>
  );

}

export default InnerMenu;
