import { FC } from "react";
import { FooterTopWrapper } from "./footer";
import { TitleLogo, TitleRightParagraph } from "..";

const FooterTop: FC = () => {
  return (
    <FooterTopWrapper>
      <TitleLogo />
      <TitleRightParagraph />
    </FooterTopWrapper>
  );
};

export default FooterTop;
