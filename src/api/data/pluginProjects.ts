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
  pageLink?: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  paragraphInfo: string;
  paragraphInfo2?: string;
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
    link: "/our-projects-info",
    pageLink: "https://eximerp.uz/",
    basedOn: ["Startup", "Web"],
    paragraphInfo:
      "EximERP raqamli platformasi - O'zbekiston Respublikasi tashqi iqtisodiy faoliyatini resurslarni rejalashtirishni optimallashtirish bo'lib, u: 1. Milliy iqtisodiyotga, mamlakat byudjetining rentabelligini oshirishga hissa qo'shadi; 2. Firibgarlikka va taqiqlangan va cheklangan tovarlarning noqonuniy aylanishiga qarshi kurashib, mamlakat manfaatlari himoyasini ta'minlaydi; 3. Iqtisodiy rejalashtirishda zarur bo'lgan tashqi savdo operatsiyalarining statistik ma'lumotlarini taqdim etadi;",
    paragraphInfo2:
      "Tashqi iqtisodiy faoliyat jarayonlarini raqamlashtirish, axborotni elektron shaklda taqdim etish - bugungi kunda bojxona faoliyatini tartibga solishning samarali va samarali yo'nalishlaridan biri hisoblanadi. Tizim ilova qilingan hujjatlarni ko'rib chiqmoqda. Iqtisodiy tahlil va rejalashtirish uchun foydalaniladigan tashqi savdo operatsiyalari to'g'risida zarur ma'lumotlarni yaratadi. EximERP raqamli platformasi - O'zbekiston Respublikasi tashqi iqtisodiy faoliyatini resurslarni rejalashtirishni optimallashtirish bo'lib, bu: milliy iqtisodiyotga, mamlakat byudjeti rentabelligini oshirishga hissa qo'shadi; - mamlakat manfaatlarini himoya qilishni, firibgarlik va taqiqlangan va cheklangan tovarlarning noqonuniy aylanishiga qarshi kurashni ta'minlaydi;",
    category: ["All", "Startup"],
  },
  {
    id: 2,
    img: oneImg,
    title: "booking any place remotely",
    miniTitle: "Booking",
    subTitle:
      "Siz orzuingizdagi sayohatni yoki spontan sarguzashtni rejalashtiryapsizmi? Sayohat hamrohingiz sizning turar joy va sayohat ehtiyojlaringiz uchun yagona manzildir.",
    link: "/our-projects-info",
    pageLink: "",
    date: undefined,
    basedOn: ["Startup", "iOS", "Android"],
    paragraphInfo:
      "Siz orzuingizdagi sayohatni, ish safarini yoki spontan sarguzashtni rejalashtiryapsizmi? Boshqa qaramang! Sayohat hamrohingiz sizning turar joy va sayohat ehtiyojlaringiz uchun yagona manzildir. Hotels: From boutique luxury to budget-friendly options, we offer a vast selection of hotels that cater to all tastes and preferences. Find the perfect place to stay, whether you're seeking tranquility, adventure, or city life. Vacation Rentals: Experience a home away from home with our diverse range of vacation rentals. Choose from cozy cottages, beachfront condos, or spacious villas for a unique and comfortable stay. Hostels: For budget-conscious travelers and backpackers, we provide an array of hostels in prime locations. It's the ideal solution for those who want to meet fellow travelers and explore the world without breaking the bank. Apartments: Enjoy the flexibility of apartment living. We offer fully-equipped apartments for short or long stays, allowing you to live like a local during your journey.",
    paragraphInfo2:
      "Nima uchun sayohat hamrohingizni tanlaysiz? Foydalanuvchilar uchun qulay: Bizning veb-saytimiz va mobil ilovamiz siz uchun yaratilgan. Bir necha marta bosish orqali o'zingiz yoqtirgan turar joyni osongina qidiring, taqqoslang va bron qiling. Haqiqiy sharhlar: hamkasblaringizdan tushuncha oling. Rezervasyonlaringiz haqida ongli qaror qabul qilish uchun halol sharhlar va reytinglarni o'qing. Moslashuvchan bandlovlar: Oldindan rejalashtirishni yoki oxirgi daqiqada qaror qilishni afzal ko'rasizmi, biz sayohat uslubingizga mos keladigan moslashuvchan bandlov variantlarini taklif qilamiz. Xavfsiz to'lovlar: Xavfsiz to'lovni qayta ishlash bilan ishonch hosil qiling. Sizning moliyaviy ma'lumotlaringiz bron qilish jarayonining har bir bosqichida himoyalangan. 24/7 qo'llab-quvvatlash: Bizning maxsus mijozlarni qo'llab-quvvatlash guruhimiz har qanday so'rovlar, o'zgarishlar yoki kutilmagan vaziyatlarda sizga yordam berish uchun kechayu kunduz ishlaydi.",
    category: ["All", "Web", "mobile"],
  },
  {
    id: 3,
    img: threeImg,
    title: "booking any place remotely",
    miniTitle: "TNI ASIA",
    subTitle:
      "O'zbekiston bo‘ylab shoshilinch tibbiy yordam qabul bo‘limlari zamonaviy tibbiy jihozlar bilan ta’minlanadi.",
    link: "/our-projects-info",
    pageLink: "",
    date: undefined,
    basedOn: ["Enterprise", "Web"],
    paragraphInfo:
      "— O'zbekiston bo‘ylab shoshilinch tibbiy yordam qabul bo‘limlari zamonaviy tibbiy jihozlar bilan ta’minlanadi; — tez tibbiy yordam ko‘rsatish sifati yaxshilanadi, xususan, Sall-markazlar yangi kommunikasion tizimlar bilan jihozlanadi; — 793 ta oilaviy shifoxona va 13 ta tumanlararo tibbiyot muassasiga zarur tibbiy jihozlar olib kelib o‘rnatiladi. — davolash-profilaktika muassasalari gemodializ uskunalari bilan ta’minlanadi. Diagnostika va davolash jarayoniga yangi tibbiy texnologiyalar tatbiq etilishi orqali ixtisoslashtirilgan yuqori texnologiyali tibbiy yordam ko‘rsatish salmog‘i oshiriladi. Shuningdek, O'zbekistonda kattalar uchun 300 o‘rinli ko‘p tarmoqli zamonaviy ixtisoslashtirilgan tibbiyot markazi tashkil etilib, yiliga 8,5 mingta yuqori texnologiyali jarrohlik operatsiyalarini bajarish hamda 720 ta ish o‘rni yaratish rejalashtirilgan.",
    paragraphInfo2:
      "Bundan tashqari, O‘zbekistonda onkologiya xizmati muassasalarini yuqori texnologiyali uskunalar bilan jihozlashga doir loyihaning 2-bosqichi doirasida Respublika ixtisoslashtirilgan onkologiya va radiologiya ilmiy-amaliy tibbiyot markazi hamda uning 16 ta filiali qurilib, jihozlanadi. Ta'kidlanishicha, 265 o‘rinli milliy saraton markazini qurish orqali O‘zbekistonda ilg‘or onkologik tibbiy xizmat ko‘rsatish yo‘lga qo‘yiladi. Nukus shahrida ayollar va bolalar uchun 150 o‘rinli Shayx Xalifa nomidagi shifoxona barpo etilib, Orolbo‘yi mintaqasida tibbiy yordamni maqsadli yo‘naltirish tizimi yuqori darajada tashkil etiladi.",
    category: ["All", "Enterprise"],
  },
  {
    id: 4,
    img: fourImg,
    title: "booking any place remotely",
    miniTitle: "Iqro Quran",
    subTitle:
      "Imom Buxoriy nomli Toshkent islom instituti va Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universitetini tugallab, islomshunos va  bo‘yicha bakalavr darajasini olgan",
    link: "/our-projects-info",
    pageLink: "http://iqro-quran.uz/",
    date: undefined,
    basedOn: ["Web", "Startup", "Mobile"],
    paragraphInfo:
      "Ushbu sayt asoschisi Sardorxon Jahongir 1977 yil Toshkent shahrida tavallud topgan. Imom Buxoriy nomli Toshkent islom instituti va Mirzo Ulug‘bek nomidagi O‘zbekiston Milliy universitetini tugallab, islomshunos va filolog mutaxassisligi bo‘yicha bakalavr darajasini olgan. Dastlabki ilmiy faoliyatini O‘zbekiston Milliy universitetida arab tilidan saboq berish bilan boshlagan. Shuningdek, Misr Arab respublikasi elchixonasi qoshidagi fan va taʼlim markazining o‘quv bo‘limida faoliyat olib borgan. Nufuzli nashriyotlarda rahbar va bosh muharrir lavozimlarida ishlab mamlakatimizda ko‘plab ilmiy-maʼrifiy kitoblarga noshirlik qilgan. Mazkur universitetda dars berish bilan birga xalqaro aloqalar bo‘limida ham faoliyat yurgizgan. U xorijda bir qancha ilmiy-amaliy konferensiyalar tashkilotchisi va qatnashchisi hisoblanadi. Uning muallifligida chet ellarda ko‘plab ilmiy maqolar va kitoblar nashr qilingan. Sardorxon Jahongir xalqaro miqyosada tashkil etilgan Turkiston sayyidlari va eshonlari nomli shajaralarni tadqiq qilish va tasdiqlash tashkilotining muassisi va raisi hisoblanadi.Ilmiy faoliyatini davom ettirish maqsadida bir qancha xorijiy davlatlarda malaka oshirgan. Jumladan,so‘nggi o‘n yil mobaynida Turkiya respublikasida bo‘lib u yerdagi Kafkaz davlat universiteti dinshunoslik fakultetida “Tafsirshunoslik” yo‘nalishi bo‘yicha magistr darajasini olgan hamda nomzodlik dissertatsiyasini yoqlagan. Ayni damda respublikamizdagi “Turon” fan-taʼlim markazi tarmoqlarining rahbari hisoblanib, arab tili, Hadis va Qurʼoni Karim yo‘nalishida saboqlar berib kelmoqda. Shuningdek, Qurʼoni Karim tafsiriga doir ilmiy izlanishlar olib bormoqda. Islomshunos va tilshunois olim Sardorxon Jahongir arab, fors, ingliz, rus va turk tillarini yaxshi o‘zlashtirgan.",
    paragraphInfo2:
      "Maqsadimiz milliy qadriyatlarimiz hamda maʼnaviy boy merosimizni tiklash va ularnipuxta o‘rganish, uning mazmun-mohiyati va ahamiyatini xalqimiz o‘rtasidatarg‘ib etish, ajdodlarimiz bo‘lgan Imom Buxoriy, Nasafiy va Zamaxshariysingari ulamolar izidan borish, ulardan bizlarga meros bo‘lib kelayotganva saqlanayotgan tarixiy hamda nodir qo‘lyozmalarni avlodlargayetkazish, ajdodlarimiz hayoti, axloqi va yuksak maʼnaviyatiniifodalovchi matnlarni xalqimizga yetkazib, yoshlarimiz qalbida ularqoldirgan merosga ehtirom, izzat va muhabbat tuyg‘usini shakllantirishdir.",
    category: ["All", "SaaS"],
  },
];
