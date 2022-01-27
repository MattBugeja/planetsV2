// import classes from "./MainImage.module.css";
import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";

function AttributeQuantity({text}) {
  return (

    <div className= {`${typography.fontSpartan} ${typography.fontSizeM} ${typography.textUpper} ${typography.attributeQuantity} ${typography.fontWeight700} ${colors.colorWhite}`}>{text}</div>

);
}


export default AttributeQuantity;