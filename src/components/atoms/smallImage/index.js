import classes from "./componentStyle.module.css";

function SmallImage({src, planetName}) {
  return (
    <div className={`${classes.containerWidth} ${classes.containerHeight} ${classes.componentGridPosition} `}>
    <picture >
      <img src={`${process.env.PUBLIC_URL}${src}`} alt={planetName} className={`${classes.imageWidth}`}/>
    </picture>
    </div>
   );
}

export default SmallImage;
