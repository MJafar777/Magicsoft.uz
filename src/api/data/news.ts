import { news6, news2, news3, news4, news5 } from "../../assets";

export const dataFilter = [
  { id: 1, value: "All" },
  { id: 2, value: "Getting started" },
  { id: 3, value: "Business" },
  { id: 4, value: "Design" },
  { id: 5, value: "Development" },
  { id: 6, value: "SEO" },
  { id: 7, value: "VR & AR" },
];

export const dataCards: {
  id: number;
  img: string;
  link: string;
  title: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  paragraphInfo: string;
  date?: string | undefined;
  category: string[];
}[] = [
  {
    id: 1,
    img: news6,
    miniTitle: "iPhone 15 серияси расман USB-C билан тақдим қилинди!",
    title:
      "Yilning eng intizorlik bilan kutilgan smartfonlari - iPhone 15 seriyasi rasman USB-C bilan taqdim qilindi!",
    subTitle:
      "Yilning eng intizorlik bilan kutilgan smartfonlari – iPhone 15 seriyasi rasman taqdim qilindi. Apple kompaniyasi kecha o‘zining Wonderlust taqdimotida Watch Series 9, hamda, Watch Ultra 2 aqlli soatlaridan so‘ng yangi avlod iPhone‘larini namoyish qildi.",
    link: "/news_informations",
    date: "September 13 , 2023",
    basedOn: ["Business", "Engineering"],

    paragraphInfo:
      "Yilning eng intizorlik bilan kutilgan smartfonlari – iPhone 15 seriyasi rasman taqdim qilindi. Apple kompaniyasi kecha o‘zining Wonderlust taqdimotida Watch Series 9, hamda, Watch Ultra 2 aqlli soatlaridan so‘ng yangi avlod iPhone‘larini namoyish qildi. Keling eng avvalo yangi iPhone‘lardan eng ko‘p talab qilingan va bir necha yildan beri mish-mish qilib kelinayotgan xususiyatdan boshlasak. USB Type-C. Ha, iPhone 15 seriyasi vanihoyat rasman USB Type-C porti bilan taqdim qilindi (rahmat Yevropa?). Yangi avlod iPhone‘lari bilan Apple o‘zining Lightning‘idan voz kechdi. Endi sizga yangi Ayfoninigizni quvvatlash uchun alohida kabel kerak emas. Siz uni Mac yoki iPad planshetingizning USB-C kabeli orqali quvvatlay olasiz. Yoki Android‘chi do‘stingizdan Type-C quvvatlagichini so‘rab turishingiz ham mumkin.",
    category: ["All", "Getting started"],
  },
  {
    id: 2,
    img: news2,
    miniTitle: "Apple Watch Series 9",
    title:
      "Apple расман Watch Series 9 ва Watch Ultra 2 соатларини тақдим қилди!",
    subTitle:
      "Kutilganidek, kecha Apple‘ning Wonderlust taqdimoti bo‘lib o‘tdi. Taqdimot kompaniyaning yangi avlod Watch Series aqlli soatlari namoyishidan boshlandi.",
    link: "/news_informations",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "Kutilganidek, kecha Apple‘ning Wonderlust taqdimoti bo‘lib o‘tdi. Taqdimot kompaniyaning yangi avlod Watch Series aqlli soatlari namoyishidan boshlandi.Apple Watch Series 9 soatidagi eng katta o‘zgarishlardan biri S9 chipi bo‘lib, ushbu ikki yadroli protsessor 5.6 million tranzistorlarga ega va bu avvalgi S8 chipi tranzistorlari sonidan 60% ga ko‘proqdir. Yangi chip bilan Siri‘ga qilgan murojaatlaringiz yana-da tezroq ko‘rib chiqiladi va endi Siri sizga yana-da aniqroq javoblar beradi.",
    category: ["All", "Getting started"],
  },
  {
    id: 3,
    img: news3,
    miniTitle: 'Нима учун ҳали ҳам "история" қўя олмаяпмиз?',
    title:
      "O‘tgan iyun oyi oxirida Pavel Durov Telegram‘ga Stories funksiyasi qo‘shilishini eʼlon qildi",
    subTitle:
      "O‘tgan iyun oyi oxirida Pavel Durov Telegram‘ga Stories funksiyasi qo‘shilishini eʼlon qildi. Iyul oyida esa funksiya Premium obuna egalari uchun eksklyuziv tarzda ishga tushirildi.",
    link: "/news_informations",
    date: "August 26 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "O‘tgan iyun oyi oxirida Pavel Durov Telegram‘ga Stories funksiyasi qo‘shilishini eʼlon qildi. Iyul oyida esa funksiya Premium obuna egalari uchun eksklyuziv tarzda ishga tushirildi. Avgust oyi o‘rtalariga kelib, Stories Telegram‘ning 10 yillik yubileyida katta yangilanish bilan barcha foydalanuvchilar uchun (Telegram Premium obunasi borligidan qatʼiy nazar) foydalanishga topshirildi. Biroq, mana 10 kundirki Telegram‘ning Stories funksiyasidan darak yo‘q, garchi ilovaning eng so‘nggi versiyasini ikki-uch marta qayta o‘rnatib ko‘rgan bo‘lsang ham. Maʼlum bo‘lishicha funksiya O‘zbekiston hududida hozircha mavjud emas va biz yolg‘iz emasmiz: Rossiya, Ukraina va Indoneziya davlat raqamlari bilan messenjerdan ro‘yxatdan o‘tganlar ham Stories imkoniyatlaridan foydalana olishmayapti. Ushbu savolga aniq va rasmiy javob yo‘q, lekin shuni tahmin qilish mumkinki, bunga funksiyaning messenjer serverlariga olib keladigan kuchlanishi sabab bo‘lishi mumkin. Bilasiz, deyarli barcha o‘zbekistonliklar Telegram messenjerida bor. Rossiya va ukrainaliklar ham Durov messenjeridan, ayniqsa, shu kunlarda juda aktiv foydalanishmoqda. Stories Telegram‘ning navbatdagi odatiy funksiyalaridan biri emas va u media, yaʼni rasm va videolar bilan ishlaydi. Millionlab Telegram foydalanuvchilarining birvarakayiga Stories qo‘yishlari esa ehtimol Telegram serverlarining ishdan chiqishiga olib kelishi mumkin. Boshqa hudud foydalanuvchilari, masalan, AQSH yoki Avstraliya esa yangi funksiyadan bemalol foydalana olishadi, chunki ushbu mamlakatlarda xizmat unchalik ommalashmagan va kamchilik foydalanishi hisobiga Telegram‘ga ortiqcha yuklanish tushmaydi.",
    category: ["All", "Business"],
  },
  {
    id: 4,
    img: news4,
    miniTitle: "Meta (sobiq Facebook) o‘zbekistonlik dasturchilarga...",
    title:
      "Meta (sobiq Facebook) o‘zbekistonlik dasturchilarga sarmoya kiritadi",
    subTitle:
      "Qoraqalpog‘istonlik Beknazar Abdikamalov va Aziz Murtazoyev singapurlik hamkori Jastin Kim bilan birgalikda “Ami” ruhiy salomatlik bo‘yicha startap ishga tushirish uchun Meta (Facebook) tomonidan 3 million...",
    link: "/news_informations",
    date: "may 26 , 2022",
    basedOn: ["Engineering", "Design"],
    paragraphInfo:
      "Qoraqalpog‘istonlik Beknazar Abdikamalov va Aziz Murtazoyev singapurlik hamkori Jastin Kim bilan birgalikda “Ami” ruhiy salomatlik bo‘yicha startap ishga tushirish uchun Meta (Facebook) tomonidan 3 million AQSH dollariga teng investitsiya jalb qildi, deya xabar bermoqda IT-Park o‘z veb-saytida. Maʼlum bo‘lishicha, loyiha ruhiy salomatlik xizmatini yana-da qulayroq qilish uchun onlayn maslahat seanslarini o‘z ichiga oladi. Bu Osiyo mamlakatlaridagi biznes egalariga o‘z xodimlarining ruhiy salomatligini yaxshilash imkonini beradi. Startap asoschilari taʼkidlashicha, bunday platformani yaratish g‘oyasi pandemiyadan keyin paydo bo‘lgan, negaki Jahon sog‘liqni saqlash tashkilotining 2022 yil mart oyidagi hisobotiga ko‘ra, pandemiyadan so‘ng butun dunyo bo‘ylab depressiya, tushkunlik darajasi 25 foizga oshgan. Osiyoning ulkan startap markazlari Singapur va Jakartadan tashqari, Ami startapini butun Osiyo bo‘ylab kengaytirish, bu orqali kompaniyalarga ruhiy salomatlik platformasi yordamida yuqori malakali mutaxassislarni jalb qilish imkoniyatini yaratish rejalashtirilmoqda.",
    category: ["All", "Design"],
  },
  {
    id: 5,
    img: news5,
    miniTitle: "Karnataka State Government's Finance Department partners ",
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "/news_informations",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform. As part of this partnership, Kellton has decided to invest in co-development, Go-To-Market, and operational excellence for Hooper Labs. This synergy accelerates Kellton's leadership in the area of Process Automation, Data Transformation, and intelligent delivery of Enterprise Solutions. Krishna Chintam, Global CEO at Kellton, stated, This partnership has been timely, especially when Generative AI and Hyper Automation are at the core of the enterprise architecture and growth strategy for all our enterprise clients. Hooper's uniquely packaged derivative solutions in Compliance Management, Audit Management, and Process Automation, coupled with a unique Data Orchestration and Decision Engine, provide our customers with a wide variety of possibilities to resolve their process gaps. We are very excited about this partnership and thrilled to showcase Hooper and its derivatives as part of our Kellton offerings, he further adds. Srikanthan Tirumala, Founder & CEO of Hooper Labs Inc., said that he is extremely thrilled to share the stage with Kellton to reach out to a global audience. Leveraging both Kellton's remarkable reputation in delivering quality solutions to large enterprises and taking help from their Marketing and Sales teams, we believe we will grow multiple times faster than we could imagine, he states. Kellton is a Digital technology consulting and IT services company that delivers innovative IoT and digital solutions driving exceptional business value. As a globally trusted Digital Transformation company, Kellton excels in leveraging new technologies to transform enterprises for a digital future in a groundbreaking manner. From start-ups to Fortune 500 companies, Kellton provides end-to-end digital solutions to hundreds of clients across multiple business verticals and earned a distinguished position in the ecosystem. Hooper Labs Inc. is a privately held company with headquarters in Saratoga, CA, with an R&D center in Hyderabad, India. ",
    category: ["All", "Development"],
  },
  {
    id: 6,
    img: news6,
    miniTitle: "Karnataka State Government's Finance Department partners ",
    title:
      "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation",
    subTitle:
      "Orci, nullam id pretium morbi adipiscing risus nulla. Turpis accumsan quis nulla dictumst rhoncus facilisis. Leo eget non velit, egestas proin molestie id ac. Non tincidunt nisi senectus mollis faucibus leo, tempus, viverra.",
    link: "/news_informations",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "Kellton, a publicly listed Digital Transformation company, recently partnered with Hooper Labs Inc., a Low-Code Hyper Automation platform. As part of this partnership, Kellton has decided to invest in co-development, Go-To-Market, and operational excellence for Hooper Labs. This synergy accelerates Kellton's leadership in the area of Process Automation, Data Transformation, and intelligent delivery of Enterprise Solutions. Krishna Chintam, Global CEO at Kellton, stated, This partnership has been timely, especially when Generative AI and Hyper Automation are at the core of the enterprise architecture and growth strategy for all our enterprise clients. Hooper's uniquely packaged derivative solutions in Compliance Management, Audit Management, and Process Automation, coupled with a unique Data Orchestration and Decision Engine, provide our customers with a wide variety of possibilities to resolve their process gaps. We are very excited about this partnership and thrilled to showcase Hooper and its derivatives as part of our Kellton offerings, he further adds. Srikanthan Tirumala, Founder & CEO of Hooper Labs Inc., said that he is extremely thrilled to share the stage with Kellton to reach out to a global audience. Leveraging both Kellton's remarkable reputation in delivering quality solutions to large enterprises and taking help from their Marketing and Sales teams, we believe we will grow multiple times faster than we could imagine, he states. Kellton is a Digital technology consulting and IT services company that delivers innovative IoT and digital solutions driving exceptional business value. As a globally trusted Digital Transformation company, Kellton excels in leveraging new technologies to transform enterprises for a digital future in a groundbreaking manner. From start-ups to Fortune 500 companies, Kellton provides end-to-end digital solutions to hundreds of clients across multiple business verticals and earned a distinguished position in the ecosystem. Hooper Labs Inc. is a privately held company with headquarters in Saratoga, CA, with an R&D center in Hyderabad, India. ",
    category: ["All", "Getting started"],
  },
];
