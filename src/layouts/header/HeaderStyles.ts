import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: #000;
`;

export const HeaderWrapper = styled.header`
  max-width: 1652px;
  height: 111px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;
