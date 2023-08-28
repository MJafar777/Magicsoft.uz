import {
  ContainerOfSolution,
  SolutionTitle,
  SolutionWrapper,
  Subtile,
} from "./SolutionStyles";
import CardOne from "./Card";

const Solution = () => {
  return (
    <SolutionWrapper>
      <Subtile>
        <span
          style={{
            width: "5px",
            height: "5px",
            display: "block",
            backgroundColor: "rgba(27, 99, 204, 1)",
          }}
        ></span>{" "}
        Solutions
      </Subtile>
      <SolutionTitle>
        Our Hospitality and Travel Software Solutions
      </SolutionTitle>
      <ContainerOfSolution>
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne bgColor="#17041E" />
        <CardOne />
        <CardOne bgColor="#00170E" />
        <CardOne />
        <CardOne bgColor="#070E25" />
      </ContainerOfSolution>
    </SolutionWrapper>
  );
};

export default Solution;
