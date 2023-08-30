import { styled } from "styled-components";

export const HeaderOfAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 65%;
  margin: 0 auto;
  padding-top: 151px;
`;

export const LeftSideOfHeader = styled.div`
  width: 45%;
  span {
    background-color: yellow;
    color: black;
    padding: 5px 10px;
  }
  p {
    line-height: 50px;
    font-size: 49px;
    color: white;
    line-height: 114.3%;
  }
`;

export const RightSideOfHeader = styled.div`
  /* width: 60%; */
  div {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 34px 0;
  }
`;
