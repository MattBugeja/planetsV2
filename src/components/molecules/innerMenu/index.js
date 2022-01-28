import classes from "./componentStyle.module.css";
import borders from "../../../components/borders.module.css";
import InnerMenuButton from "../../atoms/innerMenubutton";

function InnerMenu({ theme, menuTitles, click, viewType }) {
  const menuTitle = menuTitles;
  return (
    <div
      className={`${classes.flex} ${borders.borderPaleWhiteSM} ${classes.width} ${classes.margin}`}
    >
      {menuTitle &&
        menuTitle.map((menuTitle, index) => (
          <InnerMenuButton
            theme={theme}
            key={index}
            viewType={viewType}
            title={menuTitle}
            click={() => {
              click(menuTitle);
            }}
          />
        ))}
    </div>
  );
}

export default InnerMenu;
