import { FC } from "react";
import { FooterMainWrapper } from "./footerMain";
import useWindowWidth from "../../../../hooks/useWindowWidth";
import { BoxContact, BoxImgLast, BoxMenuFirst, BoxMenuSecond } from "..";

const FooterMain: FC = () => {
  const width = useWindowWidth();
  return (
    <>
      <FooterMainWrapper>
        <BoxContact />

        <BoxMenuFirst />

        <BoxMenuSecond />
        {width <= 992 && width > 640 ? "" : <BoxImgLast />}
      </FooterMainWrapper>
      {width <= 992 && width > 640 ? <BoxImgLast /> : ""}
    </>
  );
};

export default FooterMain;
