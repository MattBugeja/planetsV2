import classes from "./componentStyles.module.css"
import borders from "../../../components/borders.module.css";
import AttributeName from "../../atoms/attributeName";
import AttributeQuantity from "../../atoms/attributeQuantity";
import data from "../../../data.json"
import { useSelector } from "react-redux";

function Attributes() {

  const planetIndex = useSelector((state)=>state.planetInfo.planetIndex)
  const attributes = data[planetIndex].attributes

  return (
    <div className={`${classes.gridPosition} ${classes.componentPadding} ${classes.containerFlex}`}>
      {attributes.map((attribute, index) => (
        <div className={`${classes.flex} ${borders.borderPaleWhite} ${classes.padding} ${classes.margin} `} key={index}>
          <AttributeName text={attribute.attributeName} />
          <AttributeQuantity text = {attribute.attributeQuantity}/>
        </div>
      ))}
    </div>
  );
}

export default Attributes;
