import { styled } from "styled-components";

export const HeaderOfAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 75%;
  margin: 0 auto;
  padding-top: 151px;
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 85%;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 90%;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    width: 100%;
  }

  @media ${(prop) => prop.theme.breakpoints.md} {
    flex-direction: column;
    width: 100%;
    padding-top: 90px;

    /* margin: 0; */
    /* padding: 0; */
  }
`;

export const LeftSideOfHeader = styled.div`
  width: 45%;
  span {
    background-color: #d4f54c;
    color: black;
    padding: 5px 10px;
  }
  p {
    line-height: 50px;
    font-size: 49px;
    color: white;
    line-height: 114.3%;
  }

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    p {
      font-size: 39px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 35%;
    p {
      font-size: 32px;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    width: 65%;
    p {
      font-size: 27px;
      margin-left: 30px;
    }
  }
  @media ${(prop) => prop.theme.breakpoints.md} {
    width: 75%;
   }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    width: 90%;
  }
`;

export const RightSideOfHeader = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 34px 0;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    width: 500px;
    div {
      margin: 0;
      padding-bottom: 10px;
      img {
        width: 45%;
        object-fit: cover;
      }
    }
    .imgOfgroup {
      width: 100%;
    }
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    width: 400px;
    div {
      margin: 0;
      padding-bottom: 10px;
      img {
        width: 45%;
        object-fit: cover;
      }
    }
    .imgOfgroup {
      width: 100%;
    }
  }
`;
