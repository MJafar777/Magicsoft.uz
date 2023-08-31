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
  CardsPaddings,
  CardsProjectWrapper,
} from "./cardsProjects";

import { Link } from "react-router-dom";
import { sendBtn } from "../../../../../../assets/images/components/PlatformProducts";

type DataCard = {
  id: number;
  img: string;
  link: string;
  title: string;
  subTitle: string;
  basedOn: string[];
  miniTitle: string;
  paragraphInfo: string;
  date?: string;
};
interface Props {
  dataCards: DataCard[];
  width: number;
  bg: string;
  btn?: string;
}

const CardsProject = (props: Props) => {
  const { dataCards, width, bg, btn } = props;

  return (
    <CardsProjectWrapper>
      {dataCards &&
        dataCards.map((item) => {
          return (
            <Cards bg={bg} width={width} key={item.id}>
              <Img src={item.img} alt={`this image not found ${item.img}`} />
              <CardsPaddings>
                <Title>{item.miniTitle}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
                <FlexBasedOn>
                  {item.basedOn &&
                    item.basedOn.map((item) => {
                      return <BasedOn key={item}>#{item}</BasedOn>;
                    })}
                </FlexBasedOn>

                {item?.date ? <DateItem>{item.date}</DateItem> : ""}

                <Link
                  style={{ listStyle: "none", textDecoration: "none" }}
                  to={`${item.link}/${item.id}`}
                >
                  <SendLinkBtn>
                    {btn ? btn : "VIEW CASE STUDY"}{" "}
                    <Icon
                      src={sendBtn}
                      alt={`this image not found !${sendBtn}`}
                    />
                  </SendLinkBtn>
                </Link>
              </CardsPaddings>
            </Cards>
          );
        })}
    </CardsProjectWrapper>
  );
};

export default CardsProject;
