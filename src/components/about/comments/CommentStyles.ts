import { styled } from "styled-components";
// import next from "../../../assets/about/next.svg";
// import pre from "../../../assets/about/pre.svg";

export const CommentsWrapper = styled.div`
  height: fit-content;
  width: 90%;
  margin: 0 auto;
  margin-top: 400px;

  .slick-slider .slick-list {
    margin: 0 10px;
  }

  .slick-prev:before {
    font-size: 28px;
  }

  .slick-next:before,
  [dir="rtl"] .slick-prev:before {
    font-size: 28px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
    height: 60vh;
    margin-top: 200px;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    height: 60vh;
    margin-top: 180px;
    .slick-prev:before {
      top: 100px !important;
    }
  }
`;

export const CommentContainer = styled.div``;

export const LeadingBrandsBoxComment = styled.div`
  height: 40vh;
  width: 100%;
  margin: 0 auto;
  gap: 30px;
`;

export const CommentCardWrapper = styled.div`
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
  margin-bottom: 150px;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 62px;
    margin-bottom: 120px;
  }
  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 43.68px;
    margin-bottom: 86px;
  }
  @media ${(prop) => prop.theme.breakpoints.md} {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
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
