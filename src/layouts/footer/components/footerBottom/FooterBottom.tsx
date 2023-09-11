import { FC } from "react";
import { ScrollTop, SubText } from "..";
import { FooterBottomWrapper } from "./footerBottom";

const FooterBottom: FC = () => {
  return (
    <FooterBottomWrapper>
      <SubText />
      <ScrollTop />
    </FooterBottomWrapper>
  );
};

export default FooterBottom;
