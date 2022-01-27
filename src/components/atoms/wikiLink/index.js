import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";

function WikiLink({ url }) {
  return (
    <div
      className={`${typography.fontSpartan} ${typography.fontSizeS} ${typography.sourceLink} ${colors.colorWhiteHalf}`}
    >
      Source: <span className={`${typography.fontWeight700}  ${typography.underline}`}>
        <a target ={"blank"} href={url}>Wikipedia</a>
      </span>
    </div>
  );
}

export default WikiLink;
