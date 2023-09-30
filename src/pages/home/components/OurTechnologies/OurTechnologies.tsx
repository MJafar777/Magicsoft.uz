import { useNavigate } from "react-router-dom";
import { tecCardImae1, tecCardImae2 } from "../../../../assets/images";
import ButtonIfo from "../../../../components/buttons/buttonInfo/ButtonIfo";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import useLocales from "../../../../locales/useLocales";
import {
  OurTechnologiesCard,
  OurTechnologiesCards,
  OurTechnologiesTitle,
  OurTechnologiesWrapper,
  OurTechnologiesCardTitle,
  OurTechnologiesCardButton,
  OurTechnologiesPageNumber,
  OurTechnologiesCardDescription,
  OurTechnologiesContainerWrapper,
} from "./OurTechnologiesStyles";

const OurTechnologies = () => {
  const { translate } = useLocales();
  const navigate = useNavigate();

  return (
    <OurTechnologiesContainerWrapper>
      <OurTechnologiesWrapper>
        <OurTechnologiesTitle>
          {translate("We")}
          <span>{translate("ourTechnologiesTitle1")} </span>
          <br className="md-removed-br" /> {translate("ourTechnologiesTitle2")}
        </OurTechnologiesTitle>

        <OurTechnologiesPageNumber>
          <PageSectionNumber fullPageNumber={12} currentPageNumber={"05"} />
        </OurTechnologiesPageNumber>

        <OurTechnologiesCards>
          <OurTechnologiesCard>
            <OurTechnologiesCardTitle>
              {translate("travelLogistics")} <span>&</span>
              <br className="md-removed-br" /> {translate("hospitality")}
            </OurTechnologiesCardTitle>

            <OurTechnologiesCardDescription>
              {translate("travelLogisticsDesc")}
            </OurTechnologiesCardDescription>

            <OurTechnologiesCardButton onClick={() => navigate("/travels")}>
              <ButtonIfo
                text1={translate("LEARNMORE")}
                text2={translate("LEARNMORE")}
              />
            </OurTechnologiesCardButton>
          </OurTechnologiesCard>

          <OurTechnologiesCard>
            <OurTechnologiesCardTitle>
              {translate("Retail")} <span>{translate("and")}</span>
              <br className="md-removed-br" />
              {translate("ecommerce")}
            </OurTechnologiesCardTitle>

            <OurTechnologiesCardDescription>
              {translate("retailDesc")}
            </OurTechnologiesCardDescription>

            <OurTechnologiesCardButton onClick={() => navigate("/retail")}>
              <ButtonIfo
                text1={translate("LEARNMORE")}
                text2={translate("LEARNMORE")}
              />
            </OurTechnologiesCardButton>

            <img
              src={tecCardImae1}
              className="tecCardImage1"
              alt="tecCardImae"
            />
          </OurTechnologiesCard>

          <OurTechnologiesCard>
            <OurTechnologiesCardTitle>
              {translate("Fintech")} <span>{translate("and")}</span>
              <br className="md-removed-br" /> {translate("Banking")}
            </OurTechnologiesCardTitle>

            <OurTechnologiesCardDescription>
              {translate("fintechTitle")}
            </OurTechnologiesCardDescription>

            <OurTechnologiesCardButton onClick={() => navigate("/fintech")}>
              <ButtonIfo
                text1={translate("LEARNMORE")}
                text2={translate("LEARNMORE")}
              />
            </OurTechnologiesCardButton>

            <img
              src={tecCardImae2}
              className="tecCardImage2"
              alt="tecCardImae"
            />
          </OurTechnologiesCard>
        </OurTechnologiesCards>
      </OurTechnologiesWrapper>
    </OurTechnologiesContainerWrapper>
  );
};

export default OurTechnologies;
