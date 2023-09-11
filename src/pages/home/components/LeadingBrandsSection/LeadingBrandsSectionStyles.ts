import { styled } from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const LeadingBrandsSectionWrapper = styled.section<BreacPointsType>`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LeadingBrandsTitle = styled.h2<BreacPointsType>`
  font-family: "MazzardM-Semibold";
  color: #fff;
  font-size: 86px;
  font-weight: 600;
  line-height: 95px;
  margin: 90px auto;
  text-align: center;

  @media ${(props) => props.theme.breakpoints.xxl} {
    max-width: 850px;
    font-size: 68.8px;
    line-height: 75.542px;
    margin: 79px auto 10px auto;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    font-size: 48.8px;
    font-weight: 600;
    line-height: 55.638px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 42.8px;
    font-weight: 600;
    line-height: 48.638px;
  }
`;

export const LeadingBrandsNumbers = styled.div<BreacPointsType>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    background-color: #1b63cc;
    margin-right: 8px;
  }

  p {
    color: #aab4c2;
    font-family: "Concretica";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }

  h4 {
    color: #aab4c2;
    font-family: "MazzardM-Semibold";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: -4px;
  }
`;

export const LeadingBrandsBox = styled.div<BreacPointsType>`
  width: 100%;
  margin: 90px auto;

  .slick-next {
    right: 0;
    left: 0;
  }

  img.leadingLogo {
    height: 105px;
  }

  .slick-track {
    display: flex !important;
    align-items: center !important;

    div {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      div {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
    }

    .slick-slider .slick-list,
    .slick-slider .slick-track {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .slick-next:before,
  .slick-prev:before {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    margin: 60px auto;

    .slick-track {
      gap: 20px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    .slick-track {
      gap: 15px;
    }

    img.leadingLogo {
      height: 85px !important;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    .slick-track {
      gap: 0px;
    }

    img.leadingLogo {
      height: 55px !important;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    img.leadingLogo {
      height: 45px !important;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    img.leadingLogo {
      height: 38px !important;
    }
  }
`;

export const LeadingBrandsCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;
