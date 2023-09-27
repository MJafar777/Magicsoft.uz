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

const LeadingBrands = () => {
  return (
    <LeadingBrandsSectionContainerWrapper>
      <LeadingBrandsSectionWrapper>
        <LeadingBrandsTitle>
          Trusted by Leading Brands and Startups
        </LeadingBrandsTitle>

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
          <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
        </ButtonMagnet>
      </LeadingBrandsSectionWrapper>
    </LeadingBrandsSectionContainerWrapper>
  );
};

export default LeadingBrands;
