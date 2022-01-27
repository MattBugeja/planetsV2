import classes from "./componentStyle.module.css";
import MenuItemContainer from "../../../containers/menuItemContainer";

function MenuModal({data}) {
  return (<div className={`${classes.bgColor} ${classes.zIndex} ${classes.height} ${classes.gridPosition} ${classes.padding}`}>

    {data.map((planet, index)=> <MenuItemContainer key = {index} planetName ={planet.name}/>)}


  </div>)
}

export default MenuModal;
