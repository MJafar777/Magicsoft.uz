import { FC } from "react";
import { FooterMainWrapper } from "./footerMain";
import { BoxContact, BoxImgLast, BoxMenuFirst, BoxMenuSecond } from "..";

const FooterMain: FC = () => {
  return (
    <FooterMainWrapper>
      <BoxContact />

      <BoxMenuFirst />

      <BoxMenuSecond />

      <BoxImgLast />
    </FooterMainWrapper>
  );
};

export default FooterMain;
