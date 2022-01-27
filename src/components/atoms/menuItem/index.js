import classes from "./componentStyle.module.css";
import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";
import borders from "../../../components/borders.module.css";


function MenuItem({ planetName, click, isMobile }) {

 
  return (
    <div className={`${classes.flex} ${isMobile ? borders.borderPaleWhite : null} `}>
      <button onClick={click}

        className={`${classes.flex} ${classes.button} ${typography.fontSpartan} ${typography.textUpper} ${colors.colorWhite} ${(isMobile? typography.fontSizeL : typography.fontSizeS)} ${classes.padding}`}
      >
        {planetName}
      </button>
    </div>
  );
}

export default MenuItem;
