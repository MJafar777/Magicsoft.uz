import React, { FC } from "react";

import { NavbarWrapper } from "./navbar";

type DataNavbar = {
  image: string;
  title: string;
};

interface Props {
  data: DataNavbar[];
}

const Navbar: FC<Props> = (props) => {
  const { data } = props;
  return <NavbarWrapper>Navbar</NavbarWrapper>;
};

export default Navbar;
