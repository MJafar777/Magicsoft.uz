import { FC } from "react";
import { Link } from "react-router-dom";

import {
  Img,
  Icon,
  Title,
  SubTitle,
  SendLinkBtn,
  MiniCardWrapper,
} from "./miniCard";
import { sendBtn } from "../../../../assets/images/components/PlatformProducts";

interface Props {
  id: number;
  img: string;
  link: string;
  subTitle: string;
  miniTitle: string;
}

const MiniCard: FC<Props> = (props) => {
  const { id, img, miniTitle, subTitle, link } = props;

  const qirqilganSozlar = subTitle.slice(0, 60);

  return (
    <MiniCardWrapper key={id}>
      <Img src={img} alt={`this image not found ${img}`} />
      <Title>{miniTitle}</Title>
      <SubTitle>{qirqilganSozlar}...</SubTitle>
      <Link
        style={{ listStyle: "none", textDecoration: "none" }}
        to={`${link}/${id}`}
      >
        <SendLinkBtn>
          LEARN MORE{" "}
          <Icon src={sendBtn} alt={`this image not found !${sendBtn}`} />
        </SendLinkBtn>
      </Link>
    </MiniCardWrapper>
  );
};

export default MiniCard;
