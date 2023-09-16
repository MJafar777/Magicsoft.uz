import {
  ibdLogo,
  tniLogo,
  eximLogo,
  amplLogo,
  kervanyol,
} from "../../../../assets/images";

import SliderAutoPlay from "../../../../components/slider/Slider";
import ButtonEscort from "../../../../components/buttons/buttonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/magnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

import {
  LeadingBrandsBox,
  LeadingBrandsCart,
  LeadingBrandsTitle,
  LeadingBrandsSectionWrapper,
  LeadingBrandsSectionContainerWrapper,
} from "./LeadingBrandsSectionStyles";
import useLocales from "../../../../locales/useLocales";

const LeadingBrands = () => {
  const { translate } = useLocales();
  
  return (
    <LeadingBrandsSectionContainerWrapper>
      <LeadingBrandsSectionWrapper>
        <LeadingBrandsTitle>{translate("leadiongTitle")}</LeadingBrandsTitle>

        <PageSectionNumber fullPageNumber={12} currentPageNumber={"02"} />

        <LeadingBrandsBox>
          <SliderAutoPlay>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={eximLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={kervanyol} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={tniLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={amplLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={ibdLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={eximLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={kervanyol} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={tniLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={amplLogo} />
            </LeadingBrandsCart>
            <LeadingBrandsCart>
              <img className="leadingLogo" src={ibdLogo} />
            </LeadingBrandsCart>
          </SliderAutoPlay>
        </LeadingBrandsBox>

        <ButtonMagnet>
          <ButtonEscort
            text1={translate("moreUpper")}
            text2={translate("moreUpper")}
            arrowOutwardIcon={false}
          />
        </ButtonMagnet>
      </LeadingBrandsSectionWrapper>
    </LeadingBrandsSectionContainerWrapper>
  );
};

export default LeadingBrands;
