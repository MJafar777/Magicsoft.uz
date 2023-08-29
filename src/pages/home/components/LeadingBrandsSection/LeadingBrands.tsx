import ButtonEscort from "../../../../components/buttons/ButtonEscort/ButtonEscort";
import ButtonMagnet from "../../../../components/buttons/MagnetikButton/ButtonMagnetik";
import SliderAutoPlay from "../../../../components/slider/Slider";

import {
  LeadingBrandsTitle,
  LeadingBrandsNumbers,
  LeadingBrandsBox,
  LeadingBrandsSectionWrapper,
  LeadingBrandsCart,
} from "./LeadingBrandsSectionStyles";

const LeadingBrands = () => {
  return (
    <LeadingBrandsSectionWrapper>
      <LeadingBrandsTitle>
        Trusted by Leading Brands and Startups
      </LeadingBrandsTitle>

      <LeadingBrandsNumbers>
        <span></span>
        <p>02</p>
        <h4>/</h4>
        <p>12</p>
      </LeadingBrandsNumbers>

      <LeadingBrandsBox>
        <SliderAutoPlay>
          <LeadingBrandsCart>1</LeadingBrandsCart>
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
        </SliderAutoPlay>
      </LeadingBrandsBox>

      <ButtonMagnet>
        <ButtonEscort text1="MORE" text2="MORE" arrowOutwardIcon={false} />
      </ButtonMagnet>
    </LeadingBrandsSectionWrapper>
  );
};

export default LeadingBrands;
