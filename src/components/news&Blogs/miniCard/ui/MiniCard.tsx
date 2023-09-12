import { FC, useEffect, useState } from "react";
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
  category: string[];
}

const MiniCard: FC<Props> = (props) => {
  const { id, img, miniTitle, subTitle, link, category } = props;

  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const qirqilganSozlar = subTitle.slice(0, 60);

  const sendToTop = (id: number, category: string[]): void => {
    id == id && category[1] == category[1]
      ? window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      : console.log("this info not found!");
  };

  return (
    <MiniCardWrapper key={id}>
      <Img src={img} alt={`this image not found ${img}`} />
      <Title>{miniTitle}</Title>
      <SubTitle>{qirqilganSozlar}...</SubTitle>
      <Link
        style={{ listStyle: "none", textDecoration: "none" }}
        to={`${link}/${id}`}
      >
        <SendLinkBtn onClick={() => sendToTop(id, category)}>
          LEARN MORE{" "}
          <Icon src={sendBtn} alt={`this image not found !${sendBtn}`} />
        </SendLinkBtn>
      </Link>
    </MiniCardWrapper>
  );
};

export default MiniCard;
