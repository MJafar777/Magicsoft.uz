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
<<<<<<< HEAD
          <LeadingBrandsCart>2</LeadingBrandsCart>
          <LeadingBrandsCart>3</LeadingBrandsCart>
          <LeadingBrandsCart>4</LeadingBrandsCart>
          <LeadingBrandsCart>5</LeadingBrandsCart>
          <LeadingBrandsCart>6</LeadingBrandsCart>
          <LeadingBrandsCart>7</LeadingBrandsCart>
          <LeadingBrandsCart>8</LeadingBrandsCart>
          <LeadingBrandsCart>9</LeadingBrandsCart>
          <LeadingBrandsCart>10</LeadingBrandsCart>
          <LeadingBrandsCart>11</LeadingBrandsCart>
          <LeadingBrandsCart>12</LeadingBrandsCart>
          <LeadingBrandsCart>13</LeadingBrandsCart>
          <LeadingBrandsCart>14</LeadingBrandsCart>
=======
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
>>>>>>> 14e7c67b681952b74fe02fff8dd8a0b660372766
        </SliderAutoPlay>
      </LeadingBrandsBox>

      <ButtonMagnet>
        <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
      </ButtonMagnet>
    </LeadingBrandsSectionWrapper>
  );
};

export default LeadingBrands;
