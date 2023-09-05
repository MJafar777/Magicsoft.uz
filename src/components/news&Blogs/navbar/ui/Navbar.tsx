import { FC } from "react";

import { Link } from "react-router-dom";

import {
  Img,
  Icon,
  Cards,
  Title,
  BasedOn,
  SubTitle,
  CardLeft,
  SendLinkBtn,
  FlexBasedOn,
  NavbarWrapper,
} from "./navbar";

import { sendBtn } from "../../../../assets/images/components/PlatformProducts";

type DataNavbar = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  link: string;
  date?: string;
  basedOn: string[];
};

interface Props {
  data: DataNavbar[];
  length: number;
}

const NavbarNews: FC<Props> = (props) => {
  const { data, length } = props;

  const randomNumber = Math.floor(Math.random() * length);
  const resultRandom = randomNumber === 0 ? randomNumber + 1 : randomNumber;

  return (
    <NavbarWrapper>
      {data &&
        data
          .filter((item) => item.id === resultRandom)
          .map((item) => {
            return (
              <Cards key={item.id}>
                <Img src={item.img} alt={`this image not found ${item.img}`} />
                <CardLeft>
                  <Title>{item.title}</Title>
                  <SubTitle>{item.subTitle}</SubTitle>
                  <FlexBasedOn>
                    {item.basedOn &&
                      item.basedOn.map((item) => {
                        return <BasedOn key={item}>#{item}</BasedOn>;
                      })}
                  </FlexBasedOn>

                  <Link
                    style={{ listStyle: "none", textDecoration: "none" }}
                    to={`${item.link}/${item.id}`}
                  >
                    <SendLinkBtn>
                      LEARN MORE{" "}
                      <Icon
                        src={sendBtn}
                        alt={`this image not found !${sendBtn}`}
                      />
                    </SendLinkBtn>
                  </Link>
                </CardLeft>
              </Cards>
            );
          })}
    </NavbarWrapper>
  );
};

export default NavbarNews;
