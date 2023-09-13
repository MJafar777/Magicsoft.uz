import { tecCardImae1, tecCardImae2 } from "../../../../assets/images";
import ButtonIfo from "../../../../components/buttons/buttonInfo/ButtonIfo";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import {
  OurTechnologiesCard,
  OurTechnologiesCards,
  OurTechnologiesTitle,
  OurTechnologiesWrapper,
  OurTechnologiesCardTitle,
  OurTechnologiesCardButton,
  OurTechnologiesCardDescription,
  OurTechnologiesPageNumber,
} from "./OurTechnologiesStyles";

const OurTechnologies = () => {
  return (
    <OurTechnologiesWrapper>
      <OurTechnologiesTitle>
        We
        <span> revolutionalize industries</span>
        <br className="md-removed-br" /> with the power of tech
      </OurTechnologiesTitle>

      <OurTechnologiesPageNumber>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"05"} />
      </OurTechnologiesPageNumber>

      <OurTechnologiesCards>
        <OurTechnologiesCard>
          <OurTechnologiesCardTitle>
            Travel, Logistics <span>&</span>
            <br className="md-removed-br" /> Hospitality
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
            <br className="md-removed-br" /> E-commerce
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
            <br className="md-removed-br" /> Banking
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
