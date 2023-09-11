import styled from "styled-components";
import { BreacPointsType } from "../../../../types/breacPointTypes";
// sm: "screen and (max-width: 576px)",
// md: "screen and (max-width: 768px)",
// lg: "screen and (max-width: 992px)",
// xl: "screen and (max-width: 1200px)",
// xxl: "screen and (max-width: 1440px)",
export const FooterMainWrapper = styled.div<BreacPointsType>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 1rem;
  }
`;
