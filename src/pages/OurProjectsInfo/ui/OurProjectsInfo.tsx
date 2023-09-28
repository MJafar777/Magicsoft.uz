import { FC, Suspense, useEffect, useState } from "react";

import {
  GridBase,
  Paragraph,
  ImageTitle,
  GridBaseOn,
  TitleBottomBorder,
  SecondaryNewsParent,
  SecondaryNewsWrapper,
  OurProjectsInfoWrapper,
} from "./ourProjectsInfoStyle";

import { Title, Info } from "@mui/icons-material";
import { useLocation, useParams } from "react-router-dom/dist";
import { dataCards } from "../../../api/data/news";
import { secondaryNews1 } from "../../../assets";
import { Loader } from "../../../components/Loading";
import { MiniCard } from "../../../components/news&Blogs/miniCard";
import { TitleBlock } from "../../../components/news&Blogs/navbar";

import { Container } from "../../../components/container";

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
  category: string[];
  paragraphInfo: string;
}

const OurProjectsInfo: FC<Props> = () => {
  const location = useLocation();
  const { id } = useParams();
  const [data, setData] = useState<DataCard[]>(dataCards);
  const [state, setstate] = useState<number | string | undefined>(id);

  console.log(data, location, "vjvjvj");

  useEffect(() => {
    setData(dataCards.filter((dataCard: DataCard) => dataCard.id == state));

    setstate(id);
  }, [id, state]);

  return (
    <OurProjectsInfoWrapper>
      <Suspense fallback={<Loader />}>
        <Container>
          <SecondaryNewsWrapper key={data[0]?.id}>
            <SecondaryNewsParent>
              <ImageTitle
                src={data[0]?.img || secondaryNews1}
                alt={`This image not found ${secondaryNews1}`}
              />

              <Title>{data[0]?.title}</Title>

              <Paragraph>{data[0]?.paragraphInfo || ""}</Paragraph>
              <br />
              <Paragraph>{data[0]?.paragraphInfo || ""}</Paragraph>

              <GridBaseOn>
                {data[0]?.basedOn.map((e) => (
                  <Info key={e}>{e}</Info>
                ))}
              </GridBaseOn>

              <TitleBlock title={"Want to explore more?"} />

              <TitleBottomBorder />

              <GridBase>
                {dataCards.map((item) => {
                  return (
                    <MiniCard
                      id={item.id}
                      img={item.img}
                      link={item.link}
                      subTitle={item.subTitle}
                      category={item.category}
                      miniTitle={item.miniTitle}
                    />
                  );
                })}
              </GridBase>
            </SecondaryNewsParent>
          </SecondaryNewsWrapper>
        </Container>
      </Suspense>
    </OurProjectsInfoWrapper>
  );
};

export default OurProjectsInfo;
