import styled from "styled-components";

interface Props {
  bgImgLoader: string;
}

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  display: flex;
  position: absolute;
  align-items: center;
  background-color: #000;
  justify-content: center;
`;

export const ChildLoader = styled.div<Props>`
  max-width: 550px;
  width: 100%;
  height: 540px;
  background-image: url(${(e) => e.bgImgLoader});
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Paragraph = styled.p`
  width: 80%;
  color: #fff;
  font-family: Concretica;
  font-size: 42px;
  margin-top: 150px;

  font-style: normal;
  font-weight: 400;
  line-height: 126.3%; /* 88.41px */
  letter-spacing: 2.8px;
`;
export const ImgParagraph = styled.img`
  margin: 0 5px;
`;
export const ImgParagraphTwo = styled.img`
  width: 40px;
  margin: 0 5px;
  animation: mymove 2s infinite;

  @keyframes mymove {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Loading = styled.div`
  width: 70%;
  padding: 2px 4px;
  border: 1px solid grey;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2px;
`;
export const Contain = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;
export const Span = styled.div`
  height: 8px;
  width: 2px;
  background-color: #fff;
`;
