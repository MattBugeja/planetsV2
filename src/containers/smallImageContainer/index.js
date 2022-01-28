import SmallImage from "../../components/atoms/smallImage";
import data from "../../data.json";
import { useSelector } from "react-redux";

function SmallImageContainer() {
  const planetIndex = useSelector((state) => state.planetInfo.planetIndex);

  const src = `${data[planetIndex].images.geology}`;
  const planetName = `${data[planetIndex].name}`;

  return <SmallImage src={src} planetName={planetName} />;
}

export default SmallImageContainer;
