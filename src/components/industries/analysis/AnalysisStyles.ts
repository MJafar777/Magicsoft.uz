import { styled } from "styled-components";

export const AnalysisWrapper = styled.div`
  width: 100%;
  padding-left: 230px;
  padding-bottom: 141px;
  display: flex;
  background-color: black;
`;

export const CardOfAnalysis = styled.div`
  width: 486px;
  height: 233px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-radius: 5px;
  --border-size: 1px;
  --border-angle: 0turn;
  /* width: 60vmin; */
  height: 50vmin;

  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #fff, #fff);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation-delay: 3s;
  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }
`;

export const ValueOfAnalysis = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 54px;
  font-style: normal;
  font-weight: 500;
  line-height: 124.175%;
  margin-bottom: 10px;
`;

export const WhichSubject = styled.div`
  color: #fff;
  font-family: Mazzard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
