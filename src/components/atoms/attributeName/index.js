import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";

function AttributeName({ text }) {
  return (
    <div
      className={`${typography.fontSpartan} ${typography.textUpper} ${typography.fontSizeS} ${colors.colorWhiteHalf}`}
    >
      {text}
    </div>
  );
}

export default AttributeName;
