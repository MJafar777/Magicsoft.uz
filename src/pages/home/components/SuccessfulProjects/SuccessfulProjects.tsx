import CountUp from "react-countup";
import {
  AnalysisWrapper,
  CardOfAnalysis,
  Subtitle,
  SuccessfulProjectsNumber,
  SuccessfulProjectsTitle,
  SuccessfulProjectsWrapper,
  Title,
} from "./SuccessfulProjectsStyles";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

const SuccessfulProjects = () => {
  const [start, setStart] = useState(0);

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
    <SuccessfulProjectsWrapper>
      <SuccessfulProjectsNumber>
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"08"} />
      </SuccessfulProjectsNumber>
      <SuccessfulProjectsTitle>Successful Projects</SuccessfulProjectsTitle>
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
            <Subtitle>Apps created</Subtitle>
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
            <Subtitle>Employees</Subtitle>
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
            <Subtitle>Positive reviews</Subtitle>
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
            <Subtitle>Title goes here</Subtitle>
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
    </SuccessfulProjectsWrapper>
  );
};

export default SuccessfulProjects;
