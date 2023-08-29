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
  justify-content: center;
  align-items: center;
`;
export const TheFirst = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --border-size: 1px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      #000,
      #000 50%,
      #000
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #fff, #fff);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: 2s bg-spin linear infinite;
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

export const TheSecond = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --border-size: 1px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      #000,
      #000 50%,
      #000
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #fff, #fff);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: 2s bg-spin 1s linear infinite;
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

export const TheThird = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --border-size: 1px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      #000,
      #000 50%,
      #000
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #fff, #fff);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: 2s bg-spin 2s linear infinite;
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
