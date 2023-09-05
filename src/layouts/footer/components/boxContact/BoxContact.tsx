import { FC } from "react";
import {
  BoxContactWrapper,
  BoxContactTitle,
  BoxContactValue,
  BoxContactFlex,
} from "./boxContact";

const BoxContact: FC = () => {
  return (
    <BoxContactWrapper>
      {BoxContactArr.map((item) => (
        <BoxContactFlex key={item.id}>
          <BoxContactTitle>{item.title}</BoxContactTitle>{" "}
          <BoxContactValue>{item.value}</BoxContactValue>
        </BoxContactFlex>
      ))}
    </BoxContactWrapper>
  );
};

export default BoxContact;

interface BoxContactArrType {
  id: number;
  title: string;
  value: string;
}

const BoxContactArr: BoxContactArrType[] = [
  { id: 1, title: "Locations:", value: "Tashkent, Uzbekistan" },
  { id: 2, title: "Phone:", value: "+998 97 123 45 67" },
  { id: 3, title: "Email:", value: "qeq123@gmail.com" },
  { id: 4, title: "Address:", value: "Tashkent, Uzbekistan" },
];
