import { slide1, slide2, slide3, slide4, slide5, slide6, slide7 } from "../../../assets/about";
import useLocales from "../../../locales/useLocales";
import { Title } from "../analysis/AnalysisStyles";

import {
  LeadingBrandsBox,
  LeadingBrandsCart,
  LeadingBrandsImgWrapper,
} from "./LeadingBrandsSectionStyles";
import SliderAutoPlay from "./SliderForAbout";

const SliderOfWorkers = () => {
  const { translate } = useLocales();
  return (
    <LeadingBrandsImgWrapper>
      <LeadingBrandsBox>
        <Title>{translate("memoriable")}</Title>
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
            <img src={slide5} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide6} alt="" />
          </LeadingBrandsCart>
          <LeadingBrandsCart>
            <img src={slide7} alt="" />
          </LeadingBrandsCart>
        </SliderAutoPlay>
      </LeadingBrandsBox>

      {/* <ButtonMagnet>
        <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
      </ButtonMagnet> */}
    </LeadingBrandsImgWrapper>
  );
};

export default SliderOfWorkers;
