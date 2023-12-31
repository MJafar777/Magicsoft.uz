import { styled } from "styled-components";
interface HeaderOfIndustriesWraperProps {
  imgUrl?: string;
}

export const HeaderOfIndustriesWraper = styled.div<HeaderOfIndustriesWraperProps>`
  max-width: 1366px;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  cursor: pointer;
    
  @media ${(prop) => prop.theme.breakpoints.xxl} {
    width: 90%;
    height: 70vh;
  }

  @media ${(prop) => prop.theme.breakpoints.xl} {
    height: 60vh;
  }
`;

export const ContentOfHeader = styled.div`
  position: absolute;
`;

export const BaseLinks = styled.div`
  a {
    color: rgba(170, 180, 194, 1);
    text-decoration: none;
    font-family: "MazzardM-Regular";
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

    @media ${(prop) => prop.theme.breakpoints.md} {
      font-size: 12.56px;
    }
  }
`;

export const HeaderTitle = styled.div`
  font-family: "MazzardM-SemiBold";
  font-size: 86px;
  font-weight: 600;
  line-height: 94px;
  letter-spacing: 0em;
  text-align: left;
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

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 42px;
    margin-top: 5px;
    line-height: 54px;
    margin-bottom: 3px;
  }

  @media ${(prop) => prop.theme.breakpoints.sm} {
    font-size: 36px;
    margin-top: 5px;
    line-height: 36px;
    margin-bottom: 3px;
  }
`;

export const Subtitle = styled.div`
  font-family: "MazzardM-Medium";
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

  @media ${(prop) => prop.theme.breakpoints.md} {
    font-size: 10.56px;
  }
`;
