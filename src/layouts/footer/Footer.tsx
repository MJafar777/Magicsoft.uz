import { FC } from "react";

import { FooterWrapper, ChildWrapper } from "./footer";
import { FooterBottom, FooterMain, FooterTop } from "./components";
import { Container } from "../../components/container";

const Footer: FC = () => {
  return (
    <Container>
      <FooterWrapper style={{ zIndex: "140" }}>
        <ChildWrapper>
          <FooterTop />
          <FooterMain />
          <FooterBottom />
        </ChildWrapper>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
