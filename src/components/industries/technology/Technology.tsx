import EachTechnology from "./EachTechnology";
import {
  ContainerInovationSkils,
  TechnologyWrapper,
  TitleInovation,
} from "./TechnologyStyles";

const dataOfTechnology = [
  {
    id: 1,
    Title: "Artificial Intelligence (AI)",
    Info: "Travel brands are embracing Artificial Intelligence (AI) to create tailored recommendations for travelers based on their previous travel history to drive bookings.",
  },
  {
    id: 2,
    Title: "Augmented Reality (AR) / Virtual Reality (VR)",
    Info: "AR and VR technologies enable travel & hospitality businesses to enhance physical environments to encourage more tourists.",
  },
  {
    id: 3,
    Title: "Blockchain",
    Info: "Blockchain’s immutable distributed ledger technology is isolating major hospitality industry pain points by removing the layers between consumers and sellers.",
  },
  {
    id: 4,
    Title: "Internet of Things (IoT)",
    Info: "IoT technology is revolutionizing the hospitality space by helping the industry meet compliance requirements and asset tracking.",
  },
];

const Technology = () => {
  return (
    <TechnologyWrapper>
      <TitleInovation>Innovation in Hospitality</TitleInovation>
      <ContainerInovationSkils>
        {dataOfTechnology?.map((v) => {
          return <EachTechnology data={v} />;
        })}
      </ContainerInovationSkils>
    </TechnologyWrapper>
  );
};

export default Technology;
