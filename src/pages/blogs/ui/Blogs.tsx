import { FC } from "react";
import { NewsWrapper, ChildWrapper, Brecked } from "./blogs";
import {
  blogs1,
  blogs2,
  blogs3,
  blogs4,
  blogs5,
  blogs6,
} from "../../../assets";
import { NavbarNews, TitleBlock } from "../../../components/news&Blogs";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";

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
    img: blogs1,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
  {
    id: 2,
    img: blogs2,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
  {
    id: 3,
    img: blogs3,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
  {
    id: 4,
    img: blogs4,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
  {
    id: 5,
    img: blogs5,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
  {
    id: 6,
    img: blogs6,
    title: "How to design the perfect app for your business",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Business", "Design"],
  },
];

const dataFilter = [
  { id: 1, value: "All" },
  { id: 2, value: "Getting started" },
  { id: 3, value: "Business" },
  { id: 4, value: "Design" },
  { id: 5, value: "Development" },
  { id: 6, value: "SEO" },
  { id: 7, value: "VR & AR" },
];
const result = dataCard.length;

const News: FC<Props> = () => {
  return (
    <NewsWrapper>
      <ChildWrapper>
        <NavbarNews data={dataCard} length={result} />
        <TitleBlock title={"Blogs"} />
        <FilterAllProjects dataFilter={dataFilter} />
        <Brecked>
          <CardsProject
            width={500}
            bg={"rgba(44, 44, 44, 0.4)"}
            btn={"LEARN MORE"}
            dataCard={dataCard}
          />
        </Brecked>
      </ChildWrapper>
    </NewsWrapper>
  );
};

export default News;
