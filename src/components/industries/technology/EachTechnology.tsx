import {
  InovationInfo,
  InovationSkil,
} from "./TechnologyStyles";

import { Arrow } from "../../../assets/industries";

interface EachTechnologyInterface {
  id: number;
  title: string;
  info: string;
}

const EachTechnology = (prop: EachTechnologyInterface) => {


  return (
    <InovationSkil
    >
      <div className="topContent">
        <span></span>
        <p>{prop.title}</p>
        <img src={Arrow} alt="" />
      </div>
      <InovationInfo>{prop.info}</InovationInfo>
    </InovationSkil>
  );
};

export default EachTechnology;
