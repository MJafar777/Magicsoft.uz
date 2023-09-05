import { Title, Content, Card } from "./SolutionStyles";

interface Data {
  [x: string]: string | undefined;
  title?: string;
  content?: string;
}

const CardOne = (prop: Data) => {
  return (
    <Card bgColor={prop.bgColor}>
      <Title>{prop.title}</Title>
      <Content>{prop.content}</Content>
    </Card>
  );
};

export default CardOne;
