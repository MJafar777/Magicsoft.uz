import { FC } from "react";

import { FooterWrapper, ChildWrapper } from "./footer";
import { FooterBottom, FooterMain, FooterTop } from "./components";

const Footer: FC = () => {
  return (
    <>
      <FooterWrapper style={{ zIndex: "140" }}>
        <ChildWrapper>
          <FooterTop />
          <FooterMain />
          <FooterBottom />
        </ChildWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
