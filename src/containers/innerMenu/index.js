import InnerMenu from "../../components/molecules/innerMenu";
import { MENU_TITLES } from "./constants.js";
import { setViewType } from "./actions";
import { useDispatch } from "react-redux";

const InnerMenuContainer = () => {
  const dispatch = useDispatch();

  const setType = (type) => {
    dispatch(setViewType(type));
  };

  return <InnerMenu menuTitles={MENU_TITLES} click={setType} />;
};

export default InnerMenuContainer;
