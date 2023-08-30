import { FC } from "react";
import { NewsWrapper, ChildWrapper, Brecked } from "./news";
import {
  // news1,
  news2,
  news3,
  news4,
  news5,
  news6,
} from "../../../assets/index.ts";
import {
  NavbarNews,
  TitleBlock,
} from "../../../components/news&Blogs/index.ts";
import { FilterAllProjects } from "../../../components/platformProducts/allProjects/components/filters/index.ts";
import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards/index.ts";

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
    img: news6,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
  },
  {
    id: 2,
    img: news2,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
  },
  {
    id: 3,
    img: news3,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
  },
  {
    id: 4,
    img: news4,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
  },
  {
    id: 5,
    img: news5,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
  },
  {
    id: 6,
    img: news6,
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.",
    link: "http://iqro-quran.uz/",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Ai"],
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
        <TitleBlock title={"News"} />
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
