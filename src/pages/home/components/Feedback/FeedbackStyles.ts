import { styled } from "styled-components";
import next from "../../../../assets/about/next.svg";
import pre from "../../../../assets/about/pre.svg";
import { BreacPointsType } from "../../../../types/breacPointTypes";

export const FeedbackContainerWrapper = styled.section<BreacPointsType>`
  max-width: 1500px;
  padding: 0 20px;
  padding-top: 111px;
  min-height: 787px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .successfulProjectsPageSectionNumber {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    width: 100%;
    max-width: 1201px;
    min-height: 630px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
    padding: 0px 20px;
    padding-top: 0px;
    max-width: 993px;
    min-height: 441px;
    height: auto;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 50px auto;
    max-width: 768px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 50px auto;
    justify-content: flex-start;
  }
`;

export const FeedbackWrapper = styled.div`
  height: fit-content;
  width: 100%;
  margin: 0 auto;

  .slick-prev:before {
    /* content: url(${pre}) !important; */
    position: absolute !important;
    display: none;
    top: 150px !important;
    left: 50px;
    font-size: 36px !important;
    font-weight: bolder;
  }

  .slick-next:before,
  [dir="rtl"] .slick-prev:before {
    content: url(${next}) !important;
    position: absolute;
    font-weight: bolder;
    display: none;
    left: -1650px;
    top: 150px;
    font-size: 36px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    .slick-prev:before {
      top: 100px !important;
    }
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  .slick-slide {
    /* opacity: 0.5; */
  }
  .slick-slide .slick-active {
    opacity: 1;
  }
  .slick-slide .slick-active .slick-center .slick-current {
    opacity: 1 !important;
  }
`;

export const LeadingBrandsBoxFeedback = styled.div`
  height: 40vh;
  width: 100%;
  margin: 0 auto;
  gap: 30px;
`;

export const FeedbackCardWrapper = styled.div`
  width: 580px;
  height: 229px;
  background-color: rgba(22, 22, 22, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 0;
  padding-left: 32px;
  margin-left: 50px;
  p {
    font-family: "MazzardM-SemiBold";
    font-size: 20px;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 438.4px;
    height: 203.2px;
    padding: 20px 0;
    padding-left: 25px;
    p {
      font-size: 19px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 348.88px;
    height: 128.24px;
    padding: 10px 0;
    padding-left: 12px;
    p {
      font-size: 14px;
    }
  }
`;

export const FeedbackNumber = styled.div`
  padding-left: 8%;
  margin-bottom: 20px;
`;

export const LeadingBrandsBoxComment = styled.div`
  height: 40vh;
  width: 100%;
  margin: 0 auto;
  gap: 30px;
`;

export const SubTitle = styled.p`
  font-family: "MazzardM-SemiBold";
  font-size: 20px;
  margin-bottom: 21px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 16px;
  }
  @media ${(prop) => prop.theme.breakpoints.md} {
    text-align: center;
  }
`;

export const Title = styled.p`
  font-size: 79px;
  font-family: Concretica;
  padding-left: 8%;
  margin-bottom: 100px;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 62px;
    margin-bottom: 120px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 43.68px;
    margin-bottom: 50px;
  }
  @media ${(prop) => prop.theme.breakpoints.md} {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const User = styled.div`
  margin-top: 40px;
  gap: 21px;
  p {
    font-family: "MazzardM-Regular";
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    img {
      width: 15px;
      height: 15px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    img {
      width: 12px;
      height: 12px;
    }
  }
`;
