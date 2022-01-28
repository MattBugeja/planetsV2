import colors from "../../../components/colors.module.css";
import typography from "../../../components/typography.module.css";

function MainTitle({ title }) {
  return (
    <div
      className={`${typography.fontAntonio} ${typography.textUpper} ${colors.colorWhite} ${typography.fontSizeXl}`}
    >
      {title}
    </div>
  );
}

export default MainTitle;
