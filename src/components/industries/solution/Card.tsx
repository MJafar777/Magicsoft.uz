import { Title, Content, Card, CardProp } from "./SolutionStyles";

const CardOne = (prop: CardProp) => {
  return (
    <Card bgColor={prop.bgColor}>
      <Title>Online Booking Engine Software</Title>
      <Content>
        We develop highly-advanced and sophisticated AI-driven online booking
        engine software solutions that boost conversion rates and turn online
        travel portals into highly-profitable sales channels. Our travel portal
        solutions are designed to reduce the overall search and booking time,
        and help drive sales.
      </Content>
    </Card>
  );
};

export default CardOne;
