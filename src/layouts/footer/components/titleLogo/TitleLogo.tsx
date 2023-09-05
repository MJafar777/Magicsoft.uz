import { FC } from "react";
import { TitleLogoWrapper, Img, TitleLogoName } from "./titleLogo";
import { footerLogo } from "../../../../assets/images";

const TitleLogo: FC = () => {
  return (
    <TitleLogoWrapper>
      <Img src={footerLogo} alt={`this image not found ${footerLogo}`} />
      <TitleLogoName>MagicSoft</TitleLogoName>
    </TitleLogoWrapper>
  );
};

export default TitleLogo;
