import InnerMenu from "../../components/molecules/innerMenu";
import { MENU_TITLES } from "./constants.js";
import { setViewType } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json";

const InnerMenuContainer = () => {
  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.viewType.viewType);
  const planetIndex = useSelector((state) => state.planetInfo.planetIndex);
  const theme = {
    activeBackground: data[planetIndex].theme.background,
    activeBorder: data[planetIndex].theme.border,
  };

  const setType = (type) => {
    dispatch(setViewType(type));
  };

  return (
    <InnerMenu
      theme={theme}
      menuTitles={MENU_TITLES}
      click={setType}
      viewType={viewType}
    />
  );
};

export default InnerMenuContainer;
