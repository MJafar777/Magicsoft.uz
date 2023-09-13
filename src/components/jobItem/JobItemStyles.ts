import { styled } from "styled-components";

interface JobItemProps {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export const JobItemWrapper = styled.div<JobItemProps>`
  position: absolute;
  flex-shrink: 0;

  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 20px;
  padding: 13px 18px 11px 18px;
  border-radius: 25px;

  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  z-index: 100;

  background-color: transparent;
  display: flex;

  border-radius: 1.5em;
  background-color: hsla(0, 0%, 100%, 0.05);
  -webkit-backdrop-filter: blur(42px);
  backdrop-filter: blur(42px);

  img {
    position: relative;
    width: 27px;
    height: 27px;
    display: inline-block;
  }

  p {
    position: relative;
    color: #fff;
    font-family: "Concretica";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 33.072px;
  }

  @media ${(props) => props.theme.breakpoints.xxl} {
    gap: 15px;
    padding: 10px 15px 8px 15px;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      font-size: 19px;
      font-weight: 400;
      line-height: 26.458px;
    }
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    gap: 15px;
    padding: 7px 15px 5px 15px;

    img {
      width: 16px;
      height: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 18.458px;
    }
  }
`;
