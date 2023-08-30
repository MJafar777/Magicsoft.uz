import { FC } from "react";
import { TitleBlockWrapper, Title } from "./title";

interface Props {
  title: string;
}

const TitleBlock: FC<Props> = (props) => {
  const { title } = props;
  return (
    <TitleBlockWrapper>
      <Title>{title}</Title>
    </TitleBlockWrapper>
  );
};

export default TitleBlock;
