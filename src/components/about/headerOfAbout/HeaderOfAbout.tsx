import React from "react";
import {
  HeaderOfAboutWrapper,
  LeftSideOfHeader,
  RightSideOfHeader,
} from "./HeaderOfAboutStyles";
import {
  theFirstImgInHeader,
  theSecondtImgInHeader,
  theThirdImgInHeader,
} from "../../../assets/about";

const HeaderOfAbout = () => {
  return (
    <HeaderOfAboutWrapper>
      <LeftSideOfHeader>
        <p>
          <span>Magicsoft</span> is a creative digital agency working with
          startups and enterprises.
        </p>
      </LeftSideOfHeader>
      <RightSideOfHeader>
        <div>
          <img src={theFirstImgInHeader} alt="" />
          <img src={theSecondtImgInHeader} alt="" />
        </div>
        <img src={theThirdImgInHeader} alt="" />
      </RightSideOfHeader>
    </HeaderOfAboutWrapper>
  );
};

export default HeaderOfAbout;
