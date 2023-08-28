import { FC } from "react";

import {
  CardsProjectWrapper,
  Cards,
  Img,
  Title,
  SubTitle,
  BasedOn,
  DateItem,
  SendLinkBtn,
  FlexBasedOn,
} from "./cardsProjects";

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
  dataCard: DataCard[];
}

const CardsProject: FC<Props> = (props) => {
  const { dataCard } = props;

  return (
    <CardsProjectWrapper>
      {dataCard &&
        dataCard.map((item) => {
          return (
            <Cards key={item.id}>
              <Img src={item.img} alt={`this image not found ${item.img}`} />
              <Title>{item.title}</Title>
              <SubTitle>{item.subTitle}</SubTitle>
              <FlexBasedOn>
                {item.basedOn &&
                  item.basedOn.map((item) => {
                    return <BasedOn>#{item}</BasedOn>;
                  })}
              </FlexBasedOn>

              {item?.date ? <DateItem>{item.date}</DateItem> : ""}

              {/* <Link to={"/"}> */}
              <SendLinkBtn>VIEW CASE STUDY ↗️</SendLinkBtn>
              {/* </Link> */}
            </Cards>
          );
        })}
    </CardsProjectWrapper>
  );
};

export default CardsProject;
