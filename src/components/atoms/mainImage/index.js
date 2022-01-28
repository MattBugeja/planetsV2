import classes from "./componentStyle.module.css";

function MainImage({ planetName, src }) {
  return (
    <div
      className={`${classes.containerWidth} ${classes.containerHeight} ${classes.componentGridPosition} `}
    >
      <picture>
        <img
          src={`${process.env.PUBLIC_URL}${src}`}
          alt={planetName}
          className={`${classes.imageWidth}`}
        />
      </picture>
    </div>
  );
}

export default MainImage;
