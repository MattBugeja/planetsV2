import classes from "./componentStyles.module.css";
import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";

function Description({ description }) {
  return (
    <div
      className={`${typography.fontSpartan} ${typography.description} ${colors.colorWhite} ${typography.fontSizeS} ${classes.padding} `}
    >
      {description}
    </div>
  );
}

export default Description;
