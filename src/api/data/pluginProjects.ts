import {
  twoImg,
  oneImg,
  threeImg,
  fourImg,
  // fiveImg,
  // sixImg,
} from "../../assets/images/components/PlatformProducts";

export const dataCards: {
  id: number;
  img: string;
  link: string;
  date?: string;
  title: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  paragraphInfo: string;
  category: string[];
}[] = [
  {
    id: 1,
    img: twoImg,
    title:
      "AVTOMATLASHTIRILGAN AXBOROT TIZIMI “TIF(TASHQI IQTISODIY FAOLIYAT) RESURSLARNI REJALASHTIRISHNI OPTIMALLASHTIRISH”",
    miniTitle: "EximERP",
    subTitle:
      "O‘zbekiston Respublikasi tashqi iqtisodiy faoliyat jarayonlarini raqamlashtirish darajasini jahon andozalariga yetkazish",
    date: undefined,
    link: "https://eximerp.uz/",
    basedOn: ["Startup", "Web"],
    paragraphInfo: "",
    category: ["All", "Startup"],
  },
  {
    id: 2,
    img: oneImg,
    title: "booking any place remotely",
    miniTitle: "Booking",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
    paragraphInfo: "",
    category: ["All", "Web", "mobile"],
  },
  {
    id: 3,
    img: threeImg,
    title: "booking any place remotely",
    miniTitle: "TNI ASIA",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Enterprise", "Web"],
    paragraphInfo: "",
    category: ["All", "Enterprise"],
  },
  {
    id: 4,
    img: fourImg,
    title: "booking any place remotely",
    miniTitle: "Iqro Quran",
    subTitle:
      "Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis libero, proin consequat ultrices congue nunc sit.",
    link: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Web", "Startup", "Mobile"],
    paragraphInfo: "",
    category: ["All", "SaaS"],
  },
];
