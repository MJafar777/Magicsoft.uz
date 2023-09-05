import { FC } from "react";
import { NavLink } from "react-router-dom";

import {
  BoxMenuSecondWrapper,
  BoxMenuSecondValue,
  BoxMenuSecondFlex,
} from "./boxMenuSecond";

const BoxMenuSecond: FC = () => {
  return (
    <BoxMenuSecondWrapper>
      {BoxMenuSecondArr.map((item) => (
        <BoxMenuSecondFlex key={item.id}>
          <NavLink to={item.link}>
            <BoxMenuSecondValue>{item.value}</BoxMenuSecondValue>
          </NavLink>
        </BoxMenuSecondFlex>
      ))}
    </BoxMenuSecondWrapper>
  );
};

export default BoxMenuSecond;

interface BoxMenuSecondArrType {
  id: number;
  link: string;
  value: string;
}

const BoxMenuSecondArr: BoxMenuSecondArrType[] = [
  { id: 1, link: "/platform_products", value: "Platforms & Products " },
  { id: 2, link: "/", value: "Product Engineering" },
  { id: 3, link: "/", value: "Industries" },
  { id: 4, link: "/", value: "Blog" },
];
