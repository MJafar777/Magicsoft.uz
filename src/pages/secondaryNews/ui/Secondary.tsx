import { FC } from "react";
import {
  SecondaryNewsWrapper,
  SecondaryNewsParent,
  ImageTitle,
  Title,
  Info,
  GridBaseOn,
} from "./secondary";
import { secondaryNews1 } from "../../../assets";

const textTitle: string =
  "Kellton and Hooper Labs announce a strategic partnership to build a strong roadmap on AI and Hyper-Automation";

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
  data?: DataCard;
}

const SecondaryNews: FC<Props> = (props) => {
  const { data } = props;

  return (
    <SecondaryNewsWrapper key={data ? data.id : ""}>
      <SecondaryNewsParent>
        <ImageTitle
          src={data ? data.img : secondaryNews1}
          alt={`this image not found ${secondaryNews1}`}
        />
        <Title>{textTitle}</Title>
        <GridBaseOn>
          {data ? data.basedOn.map((e) => <Info>{e}</Info>) : ""}
          <Info>#Data</Info>
        </GridBaseOn>
      </SecondaryNewsParent>
    </SecondaryNewsWrapper>
  );
};

export default SecondaryNews;
