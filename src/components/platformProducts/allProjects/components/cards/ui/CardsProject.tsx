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
import { useContext } from "react";
import {
  ButtonContextProps,
  ButtonContext,
} from "../../../../../../context/ButtonContext";

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
  category: string[];
};
interface Props {
  dataCards: DataCard[];
  width: number;
  bg: string;
  btn?: string;
}

const CardsProject = (props: Props) => {
  const { filterHandlerCard } = useContext<ButtonContextProps>(ButtonContext);

  const { dataCards, width, bg, btn } = props;

  const sendToTop = (id: number, category: string[]): void => {
    id == id && category[1] == category[1]
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : console.log("this info not found!");
  };

  return (
    <>
      <CardsProjectWrapper>
        {dataCards
          .filter((value) => {
            return (
              value.category[0] == filterHandlerCard ||
              value.category[1] == filterHandlerCard
            );
          })
          .map((item) => {
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
                    style={{
                      listStyle: "none",
                      textDecoration: "none",
                      
                    }}
                    to={`${item.link}/${item.id}`}
                  >
                    <SendLinkBtn
                      onClick={() =>
                        sendToTop(dataCards[1].id, dataCards[1].category)
                      }
                    >
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
    </>
  );
};

export default CardsProject;
