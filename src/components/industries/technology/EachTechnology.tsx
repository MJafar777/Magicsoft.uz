import {
  InovationInfo,
  InovationName,
  InovationSkil,
} from "./TechnologyStyles";
import Arrow from "../../../assets/industries/Arrow.svg";
const EachTechnology = () => {
  return (
    <InovationSkil>
      <InovationName>
        Artificial Intelligence (AI) <img src={`${Arrow}`} alt="" />
       </InovationName>{" "}
      <InovationInfo>
        Travel brands are embracing Artificial Intelligence (AI) to create
        tailored recommendations for travelers based on their previous travel
        history to drive bookings.
      </InovationInfo>
    </InovationSkil>
  );
};

export default EachTechnology;
