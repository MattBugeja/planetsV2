import Attributes from "../../components/molecules/attributes";
import data from "../../data.json"
import { useSelector } from "react-redux";

function AttributesContainer() {

  const planetIndex = useSelector((state)=>state.planetInfo.planetIndex)

  const attributes = data[planetIndex].attributes

  return (

    <Attributes attributes = {attributes}/>

  );
}

export default AttributesContainer;
