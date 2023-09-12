import CountUp from "react-countup";
import {
  AnalysisWrapper,
  CardOfAnalysis,
  Subtitle,
  Title,
} from "./AnalysisStyles";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import useLocales from "../../../locales/useLocales";

const Analysis = () => {
  const [start, setStart] = useState(0);

  const { translate } = useLocales();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 500) {
        setStart(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnalysisWrapper>
      {start > 0 ? (
        <CardOfAnalysis>
          <Title>
            <CountUp
              end={100}
              duration={5.75}
              start={start}
              separator="client"
              decimal=","
              suffix=" +"
              style={{ fontFamily: "MazzardH-Medium" }}
            />
          </Title>
          <Subtitle>{translate("countOfApp")}</Subtitle>
        </CardOfAnalysis>
      ) : (
        <Skeleton
          animation="wave"
          style={{ background: "rgba(22, 22, 22, 1)", borderRadius: "12px" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      )}

      {start > 0 ? (
        <CardOfAnalysis>
          <Title>
            <CountUp
              end={35}
              duration={5.75}
              start={start}
              separator="client"
              decimal=","
              suffix=" +"
            />
          </Title>
          <Subtitle>{translate("countEmployee")}</Subtitle>
        </CardOfAnalysis>
      ) : (
        <Skeleton
          animation="wave"
          style={{ background: "rgba(22, 22, 22, 1)", borderRadius: "12px" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      )}

      {start > 0 ? (
        <CardOfAnalysis>
          <Title>
            <CountUp
              end={10000}
              duration={5.75}
              start={1000 * start}
              // separator="client"
              decimal=","
              suffix=" +"
            />
          </Title>
          <Subtitle>{translate("countReviews")}</Subtitle>
        </CardOfAnalysis>
      ) : (
        <Skeleton
          animation="wave"
          style={{ background: "rgba(22, 22, 22, 1)", borderRadius: "12px" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      )}

      {start > 0 ? (
        <CardOfAnalysis className="noneBorder">
          <Title>
            <CountUp
              end={200000}
              duration={5.75}
              start={1000 * start}
              // separator="client"
              decimal=","
              suffix=" +"
            />
          </Title>
          <Subtitle>{translate("count")}</Subtitle>
        </CardOfAnalysis>
      ) : (
        <Skeleton
          animation="wave"
          style={{ background: "rgba(22, 22, 22, 1)", borderRadius: "12px" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      )}
    </AnalysisWrapper>
  );
};

export default Analysis;
