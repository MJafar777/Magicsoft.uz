import { FC } from "react";

import {
  Info,
  Title,
  Paragraph,
  GridBaseOn,
  ImageTitle,
  TitleBottomBorder,
  SecondaryNewsParent,
  SecondaryNewsWrapper,
} from "./secondary";

import {
  news2,
  news3,
  news4,
  news5,
  news6,
  secondaryNews1,
} from "../../../assets";

import { TitleBlock } from "../../../components/news&Blogs";

import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";

const textTitle: string =
  "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation";

type DataCard = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  link: string;
  date?: string;
  basedOn: string[];
};

interface Props {
  data?: DataCard;
}

const SecondaryNews: FC<Props> = (props) => {
  const { data } = props;

  return (
    <SecondaryNewsWrapper key={data ? data.id : ""}>
      <SecondaryNewsParent>
        <ImageTitle
          src={data ? data.img : secondaryNews1}
          alt={`this image not found ${secondaryNews1}`}
        />
        <Title>{textTitle}</Title>
        <GridBaseOn>
          {data ? data.basedOn.map((e) => <Info>{e}</Info>) : ""}
          <Info>#Data</Info>
          <Info>#Business</Info>
        </GridBaseOn>
        <Paragraph>
          {data ? data.subTitle : ""}
          Kellton, a publicly listed Digital Transformation company, recently
          partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform.
          As part of this partnership, Kellton has decided to invest in
          co-development, Go-To-Market, and operational excellence for Hooper
          Labs. This synergy accelerates Kellton's leadership in the area of
          Process Automation, Data Transformation, and intelligent delivery of
          Enterprise Solutions. Krishna Chintam, Global CEO at Kellton, stated,
          "This partnership has been timely, especially when Generative AI and
          Hyper Automation are at the core of the enterprise architecture and
          growth strategy for all our enterprise clients. Hooper's uniquely
          packaged derivative solutions in Compliance Management, Audit
          Management, and Process Automation, coupled with a unique Data
          Orchestration and Decision Engine, provide our customers with a wide
          variety of possibilities to resolve their process gaps." "We are very
          excited about this partnership and thrilled to showcase Hooper and its
          derivatives as part of our Kellton offerings," he further adds.
          Srikanthan Tirumala, Founder & CEO of Hooper Labs Inc., said that he
          is extremely thrilled to share the stage with Kellton to reach out to
          a global audience. "Leveraging both Kellton's remarkable reputation in
          delivering quality solutions to large enterprises and taking help from
          their Marketing and Sales teams, we believe we will grow multiple
          times faster than we could imagine," he states. Kellton is a Digital
          technology consulting and IT services company that delivers innovative
          IoT and digital solutions driving exceptional business value. As a
          globally trusted Digital Transformation company, Kellton excels in
          leveraging new technologies to transform enterprises for a digital
          future in a groundbreaking manner. From start-ups to Fortune 500
          companies, Kellton provides end-to-end digital solutions to hundreds
          of clients across multiple business verticals and earned a
          distinguished position in the ecosystem. Hooper Labs Inc. is a
          privately held company with headquarters in Saratoga, CA, with an R&D
          center in Hyderabad, India.
        </Paragraph>
        <TitleBlock title={"Want to explore more?"} />
        <TitleBottomBorder />
        <CardsProject
          width={500}
          bg={"rgba(44, 44, 44, 0.4)"}
          btn={"LEARN MORE"}
          dataCard={dataCard}
        />
      </SecondaryNewsParent>
    </SecondaryNewsWrapper>
  );
};

export default SecondaryNews;

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
