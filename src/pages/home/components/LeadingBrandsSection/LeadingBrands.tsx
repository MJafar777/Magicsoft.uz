import {
  ibdLogo,
  tniLogo,
  eximLogo,
  amplLogo,
  kervanyol,
} from "../../../../assets/images";
import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";
import SliderAutoPlay from "../../../../components/slider/Slider";

import {
  LeadingBrandsBox,
  LeadingBrandsCart,
  LeadingBrandsTitle,
  LeadingBrandsSectionWrapper,
} from "./LeadingBrandsSectionStyles";

const LeadingBrands = () => {
  return (
    <LeadingBrandsSectionWrapper>
      <LeadingBrandsTitle>
        Trusted by Leading Brands and Startups
      </LeadingBrandsTitle>

      <PageSectionNumber fullPageNumber={12} currentPageNumber={"02"} />

      <LeadingBrandsBox>
        <SliderAutoPlay>
          <LeadingBrandsCart>
            <img src={eximLogo} style={{ width: "247px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={kervanyol} style={{ width: "367px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={tniLogo} style={{ width: "365px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={amplLogo} style={{ width: "222px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={ibdLogo} style={{ width: "163px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={eximLogo} style={{ width: "247px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={kervanyol} style={{ width: "367px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={tniLogo} style={{ width: "365px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={amplLogo} style={{ width: "222px" }} />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={ibdLogo} style={{ width: "163px" }} />
          </LeadingBrandsCart>
        </SliderAutoPlay>
      </LeadingBrandsBox>

      <ButtonMagnet>
        <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
      </ButtonMagnet>
    </LeadingBrandsSectionWrapper>
  );
};

export default LeadingBrands;
