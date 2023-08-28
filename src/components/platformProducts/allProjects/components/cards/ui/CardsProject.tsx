import { FC } from "react";

import {
  Img,
  Icon,
  Title,
  Cards,
  BasedOn,
  SubTitle,
  DateItem,
  SendLinkBtn,
  FlexBasedOn,
  CardsProjectWrapper,
} from "./cardsProjects";

import { Link } from "react-router-dom";
import { sendBtn } from "../../../../../../assets/images/components/PlatformProducts";

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

              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to={item.link}
              >
                <SendLinkBtn>
                  VIEW CASE STUDY{" "}
                  <Icon
                    src={sendBtn}
                    alt={`this image not found !${sendBtn}`}
                  />
                </SendLinkBtn>
              </Link>
            </Cards>
          );
        })}
    </CardsProjectWrapper>
  );
};

export default CardsProject;
