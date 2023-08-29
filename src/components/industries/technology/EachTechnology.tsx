import {
  InovationInfo,
  InovationName,
  InovationSkil,
} from "./TechnologyStyles";

import Arrow from "../../../assets/industries/Arrow.svg";

interface EachTechnologyInterface {
  data: {
    id: number;
    Title: string;
    Info: string;
  };
}
const EachTechnology = (prop: EachTechnologyInterface) => {
  return (
    <InovationSkil>
      <InovationName>
        {prop.data.Title} <img src={`${Arrow}`} alt="" />
      </InovationName>{" "}
      <InovationInfo>{prop.data.Info}</InovationInfo>
    </InovationSkil>
  );
};

export default EachTechnology;
