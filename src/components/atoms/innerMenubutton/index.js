import classes from "./componentStyle.module.css";
import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";
import borders from "../../../components/borders.module.css";

function InnerMenuButton({ title, click, theme, viewType }) {
  const isActive = title === viewType;

  return (
    <div
      role={"button"}
      type={"button"}
      onClick={click}
      className={`${
        isActive ? colors[theme.activeBackground] : classes.bgColor
      } ${isActive ? colors[borders[theme.activeBorder]] : null}  ${
        borders.borderPaleWhiteMD
      } ${classes.border} ${classes.width} ${classes.paddingComponent} ${
        classes.height
      }`}
    >
      <div
        className={`${typography.fontSpartan} ${classes.bgColor} ${typography.alignLeftMD} ${typography.innerMenuButton} ${classes.width} ${classes.height} ${classes.margin} ${typography.textUpper} ${classes.textAlign}  ${colors.colorWhiteHalf} ${typography.fontSizeS} ${typography.fontWeight700}  `}
      >
        {title}
      </div>
    </div>
  );
}

export default InnerMenuButton;
