import { blogs1, blogs2, blogs3, blogs4, blogs5, blogs6 } from "../../assets";

export const dataFilter = [
  { id: 1, value: "All" },
  { id: 2, value: "Getting started" },
  { id: 3, value: "Business" },
  { id: 4, value: "Design" },
  { id: 5, value: "Development" },
  { id: 6, value: "SEO" },
  { id: 7, value: "VR & AR" },
];

export const dataCard: {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  link: string;
  date?: string | undefined;
  basedOn: string[];
  category: string[];
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
    category: ["Getting started", "All"],
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
    category: ["Business", "All"],
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
    category: ["Design", "All"],
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
    category: ["Development", "All"],
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
    category: ["SEO", "All"],
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
    category: ["VR & AR", "All"],
  },
];
