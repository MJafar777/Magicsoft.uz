import { useState, useEffect } from "react";

import {
  Info,
  Title,
  Paragraph,
  GridBaseOn,
  GridBase,
  ImageTitle,
  TitleBottomBorder,
  SecondaryNewsParent,
  SecondaryNewsWrapper,
} from "./secondary";

import { useParams } from "react-router-dom";
import { secondaryNews1 } from "../../../assets";
import { dataCards } from "../../../api/data/news";
import { TitleBlock } from "../../../components/news&Blogs/navbar";
// import { CardsProject } from "../../../components/platformProducts/allProjects/components/cards";
import { MiniCard } from "../../../components/news&Blogs/miniCard";

interface DataCard {
  id: number;
  img: string;
  link: string;
  title: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  paragraphInfo: string;
  date?: string;
}

const SecondaryNews = () => {
  const { id } = useParams();
  const [data, setData] = useState<DataCard[]>(dataCards);
  const [state, setstate] = useState<number | string | undefined>(id);

  useEffect(() => {
    setData(dataCards.filter((dataCard: DataCard) => dataCard.id == state));

    setstate(id);
  }, [id, state]);

  return (
    <SecondaryNewsWrapper key={data[0]?.id}>
      <SecondaryNewsParent>
        <ImageTitle
          src={data[0]?.img || secondaryNews1}
          alt={`This image not found ${secondaryNews1}`}
        />
        <Title>{data[0]?.title}</Title>

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
                miniTitle={item.miniTitle}
              />
            );
          })}
        </GridBase>

        {/* <CardsProject
          width={500}
          bg={"rgba(44, 44, 44, 0.4)"}
          btn={"LEARN MORE"}
          dataCards={dataCards}
        /> */}
      </SecondaryNewsParent>
    </SecondaryNewsWrapper>
  );
};

export default SecondaryNews;
