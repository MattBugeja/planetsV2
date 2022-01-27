import classes from "./componentStyles.module.css";
import MainTitle from "../../atoms/mainTitle";
import Description from "../../atoms/description";
import WikiLink from "../../atoms/wikiLink";
import typography from "../../../components/typography.module.css";

function CentreInformation({title, description, url}) {
  return (
    <div className={`${classes.gridPosition} ${classes.padding} ${typography.alignLeftMD}`}>
      <MainTitle title={title}/>
      <Description description={description} />
      <WikiLink url={url} />
    </div>
  );
}

export default CentreInformation;
