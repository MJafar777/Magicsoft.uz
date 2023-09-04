import { styled } from "styled-components";
import next from "../../../assets/about/next.svg";
import pre from "../../../assets/about/pre.svg";

export const CommentsWrapper = styled.div`
  height: 90vh;
  width: 90%;
  margin: 0 auto;
  margin-top: 400px;

  .slick-prev:before {
    content: url(${pre}) !important;
    position: absolute !important;
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
    left: -1650px;
    top: 150px;
    font-size: 36px;
  }
`;

export const CommentContainer = styled.div`
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

export const LeadingBrandsBoxComment = styled.div`
  height: 40vh;
  position: relative;
  width: 100%;
  margin: 0 auto;
  gap: 30px;
`;

export const CommentCardWrapper = styled.div`
  width: 623px;
  height: 229px;
  background-color: rgba(22, 22, 22, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 26px 0;
  padding-left: 32px;
  margin-left: 50px;
  p {
    font-family: MazzardM-SemiBold;
    font-size: 20px;
  }
`;
export const SubTitle = styled.p`
  font-family: MazzardM-SemiBold;
  font-size: 20px;
  margin-bottom: 21px;
`;

export const Title = styled.p`
  font-size: 79px;
  font-family: Concretica;
  padding-left: 8%;
  margin-bottom: 150px;
`;

export const User = styled.div`
  margin-top: 40px;
  gap: 21px;
  p {
    font-family: MazzardM-Regular;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
