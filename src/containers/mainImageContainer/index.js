import data from "../../data.json";
import { useEffect, useState } from "react";
import MainImage from "../../components/atoms/mainImage";
import { useSelector } from "react-redux";

function MainImageContainer({viewType}) {
  const [isViewType, setViewType] = useState("");
  const planetIndex = useSelector((state)=>state.planetInfo.planetIndex)


  useEffect(() => {
    viewType === "overview" || viewType === "structure"
      ? setViewType(viewType)
      : setViewType("overview");
  }, [viewType]);

  const src = `${data[planetIndex].images[isViewType]}`;

  const planetName = data[planetIndex].name;

  return <MainImage src={src} planetName={planetName} />;
}

export default MainImageContainer;
