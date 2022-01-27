import CentreInformation from "../../components/molecules/centerInformation";
import data from "../../data.json"
import {useSelector} from "react-redux"

const CentreInformationContainer = () => {

  const viewType = useSelector((state)=> state.viewType.viewType)
  const planetIndex = useSelector((state)=> state.planetInfo.planetIndex)

  return (
          <CentreInformation title={data[planetIndex].name} description={data[planetIndex][viewType].content} url={data[planetIndex][viewType].source} />
  );
}

export default CentreInformationContainer;
