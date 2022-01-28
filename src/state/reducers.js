import { combineReducers } from "redux";
import viewType from "../containers/innerMenu/reducers.js";
import menuState from "../containers/navBar/reducers.js";
import planetInfo from "../containers/menuItemContainer/reducers.js";
import isMobile from "../containers/page/reducers.js";

export default combineReducers({ viewType, menuState, planetInfo, isMobile });
