import { FC } from "react";
import { NavLink } from "react-router-dom";

import {
  BoxMenuFirstWrapper,
  BoxMenuFirstValue,
  BoxMenuFirstFlex,
} from "./boxMenuFirst";

const BoxMenuFirst: FC = () => {
  return (
    <BoxMenuFirstWrapper>
      {BoxMenuFirstArr.map((item) => (
        <BoxMenuFirstFlex key={item.id}>
          <NavLink to={item.link}>
            <BoxMenuFirstValue>{item.value}</BoxMenuFirstValue>
          </NavLink>
        </BoxMenuFirstFlex>
      ))}
    </BoxMenuFirstWrapper>
  );
};

export default BoxMenuFirst;

interface BoxMenuFirstArrType {
  id: number;
  link: string;
  value: string;
}

const BoxMenuFirstArr: BoxMenuFirstArrType[] = [
  { id: 1, link: "/", value: "Digital Experience" },
  { id: 2, link: "/", value: "Data Engineering & AI" },
  { id: 3, link: "/about-us", value: "About" },
  { id: 4, link: "/", value: "Contact" },
];
