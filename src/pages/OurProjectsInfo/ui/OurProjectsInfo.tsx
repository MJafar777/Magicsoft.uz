import { FC, Suspense, useEffect, useState } from "react";

import {
  Icon,
  Info,
  Title,
  GridBase,
  Paragraph,
  ImageTitle,
  GridBaseOn,
  SendLinkBtn,
  TitleBottomBorder,
  SecondaryNewsParent,
  OurProjectsInfoWrapper,
} from "./ourProjectsInfoStyle";

import { secondaryNews1 } from "../../../assets";
import { Loader } from "../../../components/Loading";
import { Link, useParams } from "react-router-dom/dist";
import { dataCards } from "../../../api/data/pluginProjects";
import { MiniCard } from "../../../components/news&Blogs/miniCard";
import { TitleBlock } from "../../../components/news&Blogs/navbar";

import { Container } from "../../../components/container";
import { sendBtn } from "../../../assets/images/components/PlatformProducts";

interface Props {}

interface DataCard {
  id: number;
  img: string;
  link: string;
  title: string;
  date?: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  pageLink?: string;
  category: string[];
  paragraphInfo: string;
  paragraphInfo2?: string;
}

const OurProjectsInfo: FC<Props> = () => {
  const { id } = useParams();

  const [data, setData] = useState<DataCard[]>(dataCards);
  const [state, setstate] = useState<number | string | undefined>(id);

  console.log(data[0].miniTitle);

  useEffect(() => {
    setData(dataCards.filter((dataCard: DataCard) => dataCard.id == state));

    setstate(id);
  }, [id, state]);

  const sendToTop = (id: number, category: string[]): void => {
    id == id && category[1] == category[1]
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : console.log("this info not found!");
  };

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <OurProjectsInfoWrapper key={data[0]?.id}>
          <SecondaryNewsParent>
            <ImageTitle
              src={data[0]?.img || ""}
              alt={`This image not found ${secondaryNews1}`}
            />

            <Title>{data[0].miniTitle}</Title>

            <Paragraph>{data[0]?.paragraphInfo || ""}</Paragraph>

            <br />

            <Paragraph>{data[0]?.paragraphInfo2 || ""}</Paragraph>

            <GridBaseOn>
              {data[0]?.basedOn.map((e) => (
                <Info key={e}>#{e}</Info>
              ))}
            </GridBaseOn>

            <Link
              style={{
                listStyle: "none",
                textDecoration: "none",
              }}
              to={`${data[0]?.pageLink}`}
            >
              <SendLinkBtn
                onClick={() =>
                  sendToTop(dataCards[1].id, dataCards[1].category)
                }
              >
                {"VIEW CASE STUDY"}
                <Icon src={sendBtn} alt={`this image not found !${sendBtn}`} />
              </SendLinkBtn>
            </Link>

            <TitleBlock title={"Want to explore more?"} />

            <TitleBottomBorder />

            <GridBase>
              {dataCards.map((item) => {
                return (
                  <MiniCard
                    id={item.id}
                    img={item.img}
                    link={data[0].link}
                    subTitle={item.subTitle}
                    category={item.category}
                    miniTitle={item.miniTitle}
                  />
                );
              })}
            </GridBase>
          </SecondaryNewsParent>
        </OurProjectsInfoWrapper>
      </Container>
    </Suspense>
  );
};

export default OurProjectsInfo;
