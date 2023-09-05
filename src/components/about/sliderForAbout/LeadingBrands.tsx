import { slide1, slide2, slide3, slide4 } from "../../../assets/about";
// import ButtonEscort from "../../components/buttons/ButtonEscort/ButtonEscort";
// import ButtonMagnet from "../../components/buttons/MagnetikButton/ButtonMagnetik";

import {
  LeadingBrandsBox,
  LeadingBrandsCart,
  LeadingBrandsImgWrapper,
} from "./LeadingBrandsSectionStyles";
import SliderAutoPlay from "./SliderForAbout";

const LeadingBrands = () => {
  return (
    <LeadingBrandsImgWrapper>
      <LeadingBrandsBox>
        <SliderAutoPlay>
          <LeadingBrandsCart>
            <img src={slide1} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide2} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide3} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide4} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide1} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide2} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide3} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide4} alt="" />
          </LeadingBrandsCart>
        </SliderAutoPlay>
      </LeadingBrandsBox>

      {/* <ButtonMagnet>
        <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
      </ButtonMagnet> */}
    </LeadingBrandsImgWrapper>
  );
};

export default LeadingBrands;
