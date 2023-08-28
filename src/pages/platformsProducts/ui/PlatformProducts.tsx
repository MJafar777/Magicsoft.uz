import React from "react";
import { PlatformProductsWrapper } from "./platformProducts";
import { PlatformNavbar } from "../../../components/platformProducts/navbar";
import { AllProjects } from "../../../components/platformProducts/allProjects";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import {
  oneImg,
  twoImg,
  threeImg,
  fourImg,
  fiveImg,
  sixImg,
} from "../../../assets/images/components/PlatformProducts";

interface Props {}

const dataCard: {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  link: string;
  date?: string | undefined;
  basedOn: string[];
}[] = [
  {
    id: 1,
    img: twoImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
  {
    id: 2,
    img: oneImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
  {
    id: 3,
    img: threeImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
  {
    id: 4,
    img: fourImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
  {
    id: 5,
    img: fiveImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
  {
    id: 6,
    img: sixImg,
    title: "booking any place remotely",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
  },
];

const PlatformProducts: React.FC<Props> = () => {
  return (
    <PlatformProductsWrapper>
      <PlatformNavbar />
      <AllProjects />
      <CardsProject dataCard={dataCard} />
    </PlatformProductsWrapper>
  );
};

export default PlatformProducts;
