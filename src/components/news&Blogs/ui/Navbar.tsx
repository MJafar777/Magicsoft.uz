import React, { FC } from "react";

type DataNavbar = {
  image: string;
  title: string;
};

interface Props {
  data: DataNavbar[];
}

const Navbar: FC<Props> = (props) => {
  const { data } = props;
  return <div>Navbar</div>;
};

export default Navbar;
