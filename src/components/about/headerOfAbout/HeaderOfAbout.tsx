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
import useLocales from "../../../locales/useLocales";

const HeaderOfAbout = () => {
  const { translate } = useLocales();

  return (
    <HeaderOfAboutWrapper>
      <LeftSideOfHeader>
        <p>
          <span>Magicsoft</span> {translate("titleOfheader")}.
        </p>
      </LeftSideOfHeader>
      <RightSideOfHeader>
        <div>
          <img src={theFirstImgInHeader} alt="" />
          <img src={theSecondtImgInHeader} alt="" />
        </div>
        <div>
          {" "}
          <img className="imgOfgroup" src={theThirdImgInHeader} alt="" />
        </div>
      </RightSideOfHeader>
    </HeaderOfAboutWrapper>
  );
};

export default HeaderOfAbout;
