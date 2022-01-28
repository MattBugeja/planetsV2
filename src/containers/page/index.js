import Page from "../../components/page";
import { useSelector, useDispatch } from "react-redux";
import useCheckMobileScreen from "../../utils/screenSizeCheck";
import { useEffect } from "react";
import { setIsMobile } from "./actions";

const PageContainer = () => {
  const dispatch = useDispatch();

  const isMobile = useCheckMobileScreen();

  const dispatchSetIsMobile = () => {
    isMobile ? dispatch(setIsMobile(true)) : dispatch(setIsMobile(false));
  };

  useEffect(() => {
    dispatchSetIsMobile();
  }, [useCheckMobileScreen()]);

  const viewType = useSelector((state) => state.viewType.viewType);
  const menuIsOpen = useSelector((state) => state.menuState.menuIsOpen);

  return (
    <div>
      <Page viewType={viewType} menuIsOpen={menuIsOpen} />
    </div>
  );
};

export default PageContainer;
