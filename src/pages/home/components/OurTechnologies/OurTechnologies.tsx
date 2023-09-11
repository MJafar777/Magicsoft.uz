import { tecCardImae1, tecCardImae2 } from "../../../../assets/images";
import ButtonIfo from "../../../../components/buttons/ButtonInfo/ButtonIfo";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  OurTechnologiesCard,
  OurTechnologiesCards,
  OurTechnologiesTitle,
  OurTechnologiesWrapper,
  OurTechnologiesCardTitle,
  OurTechnologiesCardButton,
  OurTechnologiesCardDescription,
} from "./OurTechnologiesStyles";

const OurTechnologies = () => {
  return (
    <OurTechnologiesWrapper>
      <OurTechnologiesTitle>
        We
        <span> revolutionalize industries</span>
        <br />
        with the power of tech
      </OurTechnologiesTitle>

      <PageSectionNumber fullPageNumber={12} currentPageNumber={"05"} />

      <OurTechnologiesCards>
        <OurTechnologiesCard>
          <OurTechnologiesCardTitle>
            Travel, Logistics <span>&</span>
            <br /> Hospitality
          </OurTechnologiesCardTitle>

          <OurTechnologiesCardDescription>
            Unravel the art and science of converting travelers with
            comprehensive travel technology
          </OurTechnologiesCardDescription>

          <OurTechnologiesCardButton>
            <ButtonIfo text1={"LEARN MORE"} text2={"LEARN MORE"} />
          </OurTechnologiesCardButton>
        </OurTechnologiesCard>

        <OurTechnologiesCard>
          <OurTechnologiesCardTitle>
            Retail <span>and</span>
            <br /> E-commerce
          </OurTechnologiesCardTitle>

          <OurTechnologiesCardDescription>
            Empowering growth through dynamic E-commerce solutions
          </OurTechnologiesCardDescription>

          <OurTechnologiesCardButton>
            <ButtonIfo text1={"LEARN MORE"} text2={"LEARN MORE"} />
          </OurTechnologiesCardButton>

          <img src={tecCardImae1} className="tecCardImage1" alt="tecCardImae" />
        </OurTechnologiesCard>

        <OurTechnologiesCard>
          <OurTechnologiesCardTitle>
            Fintech <span>and</span>
            <br /> Banking
          </OurTechnologiesCardTitle>

          <OurTechnologiesCardDescription>
            FinTech software solutions designed to unlock agility, cost
            leadership, and operational efficiency
          </OurTechnologiesCardDescription>

          <OurTechnologiesCardButton>
            <ButtonIfo text1={"LEARN MORE"} text2={"LEARN MORE"} />
          </OurTechnologiesCardButton>

          <img src={tecCardImae2} className="tecCardImage2" alt="tecCardImae" />
        </OurTechnologiesCard>
      </OurTechnologiesCards>
    </OurTechnologiesWrapper>
  );
};

export default OurTechnologies;
