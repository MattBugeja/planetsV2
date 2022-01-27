import classes from "./componentStyle.module.css"
import colors from "../../../components/colors.module.css"
import typography from "../../../components/typography.module.css"


function Logo({text}) {
  return (

    <div className={`${classes.gridPosition} ${classes.flex}`}>
        <div className= {`${typography.fontSizeL} ${typography.fontAntonio} ${typography.textUpper} ${typography.logo} ${colors.colorWhite}`}>{text}</div>
        </div>
  );
}

export default Logo;
