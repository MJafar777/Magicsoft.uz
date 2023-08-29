import { styled } from "styled-components";
interface HeaderOfIndustriesWraperProps {
  imgUrl: string;
}
export const HeaderOfIndustriesWraper = styled.div<HeaderOfIndustriesWraperProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${(prop) => prop.imgUrl});
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ContentOfHeader = styled.div`
  position: absolute;
  left: 190px;
`;

export const BaseLinks = styled.div`
  a {
    color: rgba(170, 180, 194, 1);
    text-decoration: none;
    font-family: Mazzard;
    font-size: 26px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;

    @media ${(prop) => prop.theme.breakpoints.xxl} {
      font-size: 20.8px;
    }

    @media ${(prop) => prop.theme.breakpoints.xl} {
      font-size: 14.56px;
    }

    @media ${(prop) => prop.theme.breakpoints.lg} {
      font-size: 14.56px;
    }
  }
`;

export const HeaderTitle = styled.div`
  font-family: Mazzard;
  font-size: 86px;
  font-weight: 600;
  line-height: 94px;
  letter-spacing: 0em;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  margin-top: 31px;
  margin-bottom: 12px;

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 68.8px;
    margin-top: 25px;
    margin-bottom: 8px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 48.16px;
    margin-top: 17px;
    margin-bottom: 6px;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    font-size: 48.16px;
  }
`;

export const Subtitle = styled.div`
  font-family: Mazzard;
  font-size: 26px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(255, 255, 255, 1);

  @media ${(prop) => prop.theme.breakpoints.xxl} {
    font-size: 20.8px;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    font-size: 14.56px;
  }

  @media ${(prop) => prop.theme.breakpoints.lg} {
    font-size: 14.56px;
  }


`;
