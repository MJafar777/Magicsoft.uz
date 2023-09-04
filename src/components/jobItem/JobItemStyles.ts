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

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 13px 18px;
  border-radius: 25px;

  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  z-index: 100;

  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  opacity: 1;
  background-color: transparent;
  display: flex;

  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 1.5em;
  background-color: hsla(0, 0%, 100%, 0.05);
  -webkit-backdrop-filter: blur(42px);
  backdrop-filter: blur(42px);

  img {
    position: relative;
    width: 27px;
    height: 27px;
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
`;
