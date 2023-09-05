import { FC } from "react";
import { FooterBottomWrapper } from "./footerBottom";
import { ScrollTop, SubText } from "..";

const FooterBottom: FC = () => {
  return (
    <FooterBottomWrapper>
      <SubText />
      <ScrollTop />
    </FooterBottomWrapper>
  );
};

export default FooterBottom;
