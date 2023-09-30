import { news1, news2, news3, news4, news5, news6 } from "../../assets";

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
  category: string[];
  paragraphInfo: string;
  date?: string | undefined;
}[] = [
  {
    id: 1,
    img: news1,
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
    miniTitle: "AppleGPT – ChatGPT qotili!",
    title:
      "Apple kompaniyasi ChatGPT bilan raqobatlasha oladigan sunʼiy intellekt vositalari ustida ish olib bormoqda.",
    subTitle:
      "Apple kompaniyasi ChatGPT bilan raqobatlasha oladigan sunʼiy intellekt vositalari ustida ish olib bormoqda. Bu haqidagi xabarlar avvalroq faqat mish-mish sifatida qabul qilanayotgandi. Ammo Apple rahbari Tim Kuk ilk marta bu xabar rost ekanligini tasdiqladi.",
    link: "/news_informations",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "Apple kompaniyasi ChatGPT bilan raqobatlasha oladigan sunʼiy intellekt vositalari ustida ish olib bormoqda. Bu haqidagi xabarlar avvalroq faqat mish-mish sifatida qabul qilanayotgandi. Ammo Apple rahbari Tim Kuk ilk marta bu xabar rost ekanligini tasdiqladi. Choraklik hisobot konferensiyasiga ko‘ra, Apple kompaniyasining tadqiqot va ishlanmalarga sarflagan xarajatlari o‘tgan yilning shu davriga nisbatan qariyb 14 foizga o‘sdi va yilning so‘nggi choragida 22,61 milliard dollarni tashkil etdi. Tim Kukning qo‘shimcha qilishicha, Apple uzoq yillar davomida sunʼiy intellektni rivojlantirmoqda va bu sohaga katta miqdorda sarmoya kiritmoqda. Tim Kuk Routers agentligiga bergan intervyusida shunday bayonot berdi: ‘Biz bir necha yillardan buyon sunʼiy intellektning keng ko‘lamli texnologiyalari, jumladan, generativ sunʼiy intellekt bo‘yicha tadqiqotlar olib bordik. Biz ushbu sohaga sarmoya kiritishda va innovatsiyalar kiritishda davom etamiz, mahsulotlarimizni ushbu texnologiyalar yordamida rivojlantirishga imkon beramiz va odamlarga hayotlarini osonlashtirishga yordam beramiz. Shubhasiz, biz juda ko‘p mablag‘ sarflayapmiz va bu, ko‘rib turganingizdek, ilmiy-tadqiqot ishlariga sarflangan mablag‘larda o‘z aksini topmoqda.",
    category: ["All", "Development"],
  },
  {
    id: 6,
    img: news6,
    miniTitle: "Tesla Apple qila olmagan ishni qildi!",
    title:
      "Apple kompaniyasi 2017 yilda AirPower nomli o‘zining simsiz zaryadlash platformasini taqdim qilgan edi.",
    subTitle:
      "Afsuski, 2018 yilda chiqarilishi kerak bo‘lgan qurilma 2019 yilga kelib, hali bozorga chiqmasdan bekor qilingan. Biroq, bugunga kelib Tesla xuddi shunday g‘oyaga asoslangan simsiz zaryadlash paltforamasini taqdim qildi.",
    link: "/news_informations",
    date: "June 01 , 2023",
    basedOn: ["Engineering", "Design"],

    paragraphInfo:
      "Ilon Maskning Tesla kompaniyasi bir vaqtning o‘zida uchtagacha qurilmalarni (har biri uchun) 15 Vt tezlikda zaryadlay oladigan Simsiz Zaryadlash Platformasini sotuvga chiqardi. Kompaniyaning taʼkidlashicha, qurilmaning burchakli dizayni va metall stili - korpus aslida alyuminiydan yasalgan - Cybertruck‘dan ilhomlanib yaratilgan. Uning qurilmalar zaryadlash uchun qo‘yiladigan yuzaki qismi esa zamshga o‘xshash alkantara materialidan tayyorlangan.Aytish kerakki, Tesla simsiz zaryadlash platformasi FreePower texnologiyasiga asoslangan, yaʼni siz Qi simsiz zaryaladlanishni qo‘llab-quvvatlaydigan qurilmalaringizni platformaning istalgan joyiga qo‘yish bilan zaryadlay olasiz yoxud qurilmalarni zaryadlash uchun aniq joyga qo‘yish talab qilinmaydi. Tesla Simsiz Zaryadlash Platformasi uchun allaqachon buyurtma berish boshlangan. Zaryadlovchi quti ichida uni tekis yoki qiya yotgan holda ushlash imkonini beradigan magnit tirgak bilan USB-C kabel va 65 vattlik quvvat adapteri bilan keladi. Uning narxi 300 dollar bo‘lib, uni yetkazib berish 2023 yilning fevral oyidan boshlanadi.",
    category: ["All", "Getting started"],
  },
];
