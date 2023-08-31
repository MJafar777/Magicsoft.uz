import styled from "styled-components";

export const FilterAllProjectsWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;
`;
export const ButtonsFilter = styled.div`
  display: flex;
  padding: 26px 0px 25px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 111px;
  transition: all 0.3s linear;

  cursor: pointer;
  user-select: none;
  color: #9e9e9e;
  font-family: Archivo-Regular, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 137.8%;

  overflow: hidden;
  position: relative;

  z-index: 20;

  &:after {
    background: #fff;
    content: "";
    height: 155px;
    left: -75px;
    opacity: 0.2;
    position: absolute;
    top: -50px;
    transform: rotate(35deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    width: 50px;
    z-index: -10;
  }

  &:hover {
    &:after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;
