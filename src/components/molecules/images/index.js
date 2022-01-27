import classes from "./componentStyle.module.css";
import MainImageContainer from "../../../containers/mainImageContainer";
import SmallImageContainer from "../../../containers/smallImageContainer";

function Images({ viewType }) {
  return (
    <div className={`${classes.grid} ${classes.gridPosition}`}>
      <MainImageContainer viewType={viewType} />
      {viewType === "geology" ? <SmallImageContainer /> : null}
    </div>
  );
}

export default Images;
