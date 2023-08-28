import EachTechnology from "./EachTechnology";
import {
  ContainerInovationSkils,
  TechnologyWrapper,
  TitleInovation,
} from "./TechnologyStyles";

const Technology = () => {
  return (
    <TechnologyWrapper>
      <TitleInovation>Innovation in Hospitality</TitleInovation>
      <ContainerInovationSkils>
        <EachTechnology />
        <EachTechnology />
        <EachTechnology />
        <EachTechnology />
      </ContainerInovationSkils>
    </TechnologyWrapper>
  );
};

export default Technology;
