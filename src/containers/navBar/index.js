import NavBar from "../../components/molecules/navbar";
import { setMenu, resetMenu } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import data from "../../data.json";

function NavBarContainer() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.menuState.menuIsOpen);
  const dispatchSetMenu = () => {
    menuIsOpen ? dispatch(resetMenu()) : dispatch(setMenu());
  };

  return <NavBar data={data} click={dispatchSetMenu} />;
}

export default NavBarContainer;
