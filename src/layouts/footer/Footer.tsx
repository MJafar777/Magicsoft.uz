import { FC } from "react";

import { FooterWrapper, ChildWrapper } from "./footer";
import { FooterTop } from "./components";

const Footer: FC = () => {
  return (
    <FooterWrapper>
      <ChildWrapper>
        <FooterTop />
      </ChildWrapper>
    </FooterWrapper>
  );
};

export default Footer;
