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
    img: blogs1,
    title: "Technovation Girls Uzbekistan 2023",
    subTitle:
      "O‘zbekiston qizlari «Technovation Girls Uzbekistan 2023» xalqaro tanlovi doirasida rekord miqdorda mobil ilova ishlab chiqishdi",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "«Technovation Girls Uzbekistan 2023»",
    paragraphInfo:
      "Qizlar uchun O‘zbekistondagi eng yirik STEM-dastur – «Technovation Girls Uzbekistan» tanlovning navbatdagi mavsumni yakunlamoqda. Dastur Tech4Impact NNT tomonidan O‘zbekiston Respublikasi Oliy taʼlim, fan va innovatsiyalar vazirligi huzuridagi Innovatsion rivojlanish agentligi va «Yandex GO» onlayn-servisi bilan hamkorlikda tashkil qilindi. 30 may kuni har yili Tech4Impact NNT tomonidan tashkil qilinadigan «Ayollar fan va texnologiyalar sohasida» Haftaligi doirasida «Girls in STEM Day» («STEMda qizlar kuni») tadbiri o‘tkazildi. Oliy taʼlim, fan va innovatsiyalar vazirligida o‘tkazilgan tadbirda ishtirokchilar va jamoalar mentorlarining dasturdagi 4 oylik faoliyatiga yakun yasaldi.",
    basedOn: ["Startup", "Design"],
    category: ["Getting started", "All"],
  },
  {
    id: 2,
    img: blogs2,
    title: "O‘yin studiyalarini sotib olish anʼanasi davom etmoqda",
    subTitle: "O‘yin studiyalarini sotib olish anʼanasi davom etmoqda",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "O‘yin studiyalarini sotib olish",
    paragraphInfo:
      "Dushanba kuni Sony kompaniyasi Kanadaning Montreal shahridan bo‘lgan Haven Studios nomli o‘yin ishlab chiqaruvchisini sotib olayotganini eʼlon qildi. Jade Raymond tomonidan yaratilgan va yuritiladigan Haven o‘yin studiyasi o‘tgan yilning mart oyidan boshlab Sony bilan hamkorlikni boshlagan edi, lekin endi kompaniya The Sims, Assassin‘s Creed, Rainbow 6: Siege, Tomb Raider va yana boshqa bir necha o‘yinlarni ishlab chiqargan studiyani Playstation‘ga jalb qilmoqda. Afsuski, kelishuv narxi maʼlum qilinmagan. Haven rahbarining maʼlum qilishicha, ilk o‘yin AAA kategoriyasidagi ko‘pchilik bo‘lib o‘ynaladigan o‘yin bo‘ladi. Hozircha uni qachon chiqarilishi nomaʼlum, lekin u PS5 uchun asosiy o‘yin bo‘lishi kutilmoqda.",
    basedOn: ["Business", "Design"],
    category: ["Business", "All"],
  },
  {
    id: 3,
    img: blogs3,
    title: "Dunyodagi eng ekologik toza smartfon: Fairphone 5 bilan tanishing!",
    subTitle:
      "Fairphone va uning Fairphone 5 smartfoni tabiatga qanchalik do‘stona ekanligi haqida",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "Dunyodagi eng ekologik toza smartfon",
    paragraphInfo:
      "Bilasizmi, smartfon ishlab chiqarishda foydalaniladigan ayrim materiallarni qazib olishning o‘zi atrof-muhit uchun sezilarli darajada zararli hisoblanadi. Smartfoningizdan ortiq foydalanmay, uni tashlab yuboradigan bo‘lsangiz, u chiqindi poligonlariga borib tushadi va tabiatga yana-da ko‘proq zarar keltirishda davom etadi. Biroq smartfonlar bozorida tabiatga do‘stona munosabatda bo‘ladigan brendlar ham yo‘q emas. Ularning biri, aytish mumkin bo‘lsa, lideri Fairphone hisoblanadi va u bugun o‘zining yangi smartfonini taqdim qildi.           Niderlandiyaning Fairphone brendi o‘zining yangi, Fairphone 5 smartfonini taqdim qildi. U 70% qayta ishlangan, shu bilan birga, to‘g‘ri qazib olingan materiallardan tayyorlangan. Biroq, kompaniya o‘z smartfonlarini qanchalik ekologik yo‘llar bilan ishlab chiqarishga harakat qilmasin, tashlab yuborilsa, ular ham elektron chiqindiga aylanadi va tabiatga maʼlum miqdorda zarar keltirishi aniq. Bu aybini yuvish uchun esa kompaniya uning smartfonini sotib olganingizda, qurilma og‘irligidagi elektron chiqindini qayta ishlaydi, yaʼni Fairphone 5 smartfoni 212 gramm va uni sotib olsangiz, kompaniya xuddi shuncha miqdordagi elektron chiqindini qayta ishlaydi. Bu bilan kompaniya 100% e-chiqindi neytrali bo‘lishga harakat qiladi.",
    basedOn: ["Business", "Design"],
    category: ["Design", "All"],
  },
  {
    id: 4,
    img: blogs4,
    title: "Rasman: Apple yangi avlod MacBook Pro noutbuklarini taqdim etdi",
    subTitle:
      "Apple kompaniyasi 14 hamda 16 dyuymli yangi avlod MacBook Pro noutbuklarini taqdim etdi.",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "Apple yangi avlod",
    paragraphInfo:
      "Apple kompaniyasi 14 hamda 16 dyuymli yangi avlod MacBook Pro noutbuklarini taqdim etdi. Shuningdek, taqdimotda M2 va M2 Pro chipli yangi Mac mini qurilmasi ham namoyish etildi. MacBook‘lar yangilangan ulanish tanlovlarini taklif qilsa, yangi Mac mini avvalgiga qaraganda arzonroq boshlang‘ich narxda taqdim etildi. 14 hamda 16 dyuymli MacBook‘lar M2 Pro va M2 Max chiplari bilan konfiguratsiyalashgan. Avvalgi M1 Pro va M1 Max chiplariga qaraganda ular 20% yuqori CPU unumdorligi hamda 30% yuqori GPU unumdorligini taqdim etadi. M2 Pro chipini yoki 10 ta yadroli CPU hamda 16 ta yadroli GPU, yoki 12 ta yadroli CPU hamda 19 yadroli GPU konfiguratsiyada tanlash mumkin. M2 Max chipida esa yoki 12 ta yadroli CPU hamda 30 ta yadroli GPU, yoki 12 yadroli CPU va 38 ta yadroli GPU ko‘rinishida tanlash imkoni mavjud.",
    basedOn: ["Business", "Design"],
    category: ["Development", "All"],
  },
  {
    id: 5,
    img: blogs5,
    title:
      "Stiv Jobs foydalangan Macintosh kompyuteri kimoshdi savdosiga qo‘yildi",
    subTitle:
      "Lot tavsifiga ko‘ra, 1987 yil oxirida Apple Computers tomonidan ishlab chiqarilgan Macintosh SE kompyuteri 20 MB ichki qattiq disk, klaviatura, sichqoncha bilan qo‘shimcha zaxira qattiq diskiga ega va u hozirgi egasi, NeXT kompaniyasi ishchisiga Stiv Jobs tomonidan sovg‘a qilingan.",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "Stiv Jobs foydalangan Macintosh",
    paragraphInfo:
      "Maʼlum bo‘lishicha, Jobs bu kompyuterdan Apple‘ni tark etganidan keyin o‘zi asos solgan kompaniya, NeXT‘dagi ofisida 1988-1994 yillarda foydalangan. Shuningdek, 1990 va 1993 yillarda Jobsning qizi, Liza Brennan Jobs ham ofisga tashrif buyurgan vaqtlarida foydalanganligi haqida dalillar ham bor: pochta tizimi va Microsoft Word uning nomi bilan ro‘yxatdan o‘tgan. kompyuter oxirgi marta 1994 yilda Jobs boshchilik qilgan marketing loyihasi uchun ishlatilgan va keyin o‘sha yil oxirida hozirgi egasiga berilgan. O‘shanda Jobs bir kun kelib bu kompyuterning qiymati bo‘lishi mumkinligini aytgan.",
    basedOn: ["Business", "Design"],
    category: ["SEO", "All"],
  },
  {
    id: 6,
    img: blogs6,
    title:
      "Asus kichkina, lekin kuchli texnik xususiyatlarga ega mini kompyuteri chiqardi",
    subTitle:
      "Asus kompaniyasi o‘zining yangi ExpertCenter PN53 deb nomlangan mini kompyuterini global bozorga taqdim qildi. Garchi “mini” bo‘lsa ham, yangi kompyuter kapot ostida kuchli texnik xususiyatlarga ega.",
    link: "/blogs_informations",
    date: undefined,
    miniTitle: "ExpertCenter PN53 kompyuteri AMD Ryzen™ 6000H seriyasi",
    paragraphInfo:
      "ExpertCenter PN53 kompyuteri AMD Ryzen™ 6000H seriyasidagi protsessorlar (Ryzen 9 6900HX, Ryzen 7 6800H yoki Ryzen 5 6600H) va ularga integratsiyalashgan AMD Radeon™ 600M seriyasidagi grafikalar (Radeon Graphics 680M(R9/R7) yoki 660M(R5)) bilan jihozlangan. U 16GB dan ikkita, yoxud 32GB gacha bo‘lgan DDR5 operativ xotirani qo‘llab-quvvatlaydi va unda 1TB HDD uchun bitta va M.2 SSD‘lari uchun ikkita joy mavjud. Kompyuterda 7 ta: old tomonida USB 4 Type-C va ikkita USB 3.2 Gen 1 Type-A, orqasida esa quvvat yetkazib berish xususiyatiga ega USB 4 Type-C va yana uchta USB 3.2 Gen 1 Type-A portlari mavjud. Qo‘shimchasiga, mikrofon & naushnik uyasi, 60 gersli 4K monitorlarni qo‘llab-quvvatlaydigan ikkita HDMI 2.1, ularning pastida monitor, printer, shtrix-kod skaneri yoki router/modem uchun sozlanishi mumkin bo‘lgan bitta qo‘shimcha port, 2.5Gbit tezlikka chiqa oladigan simli internet porti va DC quvvat portlari mavjud. Xavfsizlik uchun kompyuter orqasida qulf solish joyi va yon tomonida Kensington qulf uyasi ham bor.",
    basedOn: ["Business", "Design"],
    category: ["VR & AR", "All"],
  },
];
