import CountUp from "react-countup";
import {
  Title,
  Subtitle,
  SuccessfulProjectsTitle,
  CardOfSuccessfulProjects,
  SuccessfulProjectsWrapper,
  SuccessfulProjectsContainerWrapper,
} from "./SuccessfulProjectsStyles";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import useLocales from "../../../../locales/useLocales";
import PageSectionNumber from "../../../../components/pageSectionNumber/PageSectionNumber";

const SuccessfulProjects = () => {
  const [start, setStart] = useState(1);

  const { translate } = useLocales();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      console.log(scrollPosition);

      if (scrollPosition >= 1) {
        setStart(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <SuccessfulProjectsContainerWrapper>
      <div className="successfulProjectsPageSectionNumber">
        <PageSectionNumber fullPageNumber={12} currentPageNumber={"08"} />
      </div>

      <SuccessfulProjectsTitle>Successful Projects</SuccessfulProjectsTitle>

      <SuccessfulProjectsWrapper>
        {start > 0 ? (
          <CardOfSuccessfulProjects>
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
          </CardOfSuccessfulProjects>
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
          <CardOfSuccessfulProjects>
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
          </CardOfSuccessfulProjects>
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
          <CardOfSuccessfulProjects>
            <Title>
              <CountUp
                end={10}
                duration={5.75}
                start={1}
                // separator="client"
                decimal=","
                suffix=" +"
              />
            </Title>
            <Subtitle>{translate("countReviews")}</Subtitle>
          </CardOfSuccessfulProjects>
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
          <CardOfSuccessfulProjects className="noneBorder">
            <Title>
              <CountUp
                end={20}
                duration={5.75}
                start={1}
                // separator="client"
                decimal=","
                suffix=" +"
              />
            </Title>
            <Subtitle>{translate("count")}</Subtitle>
          </CardOfSuccessfulProjects>
        ) : (
          <Skeleton
            animation="wave"
            style={{ background: "rgba(22, 22, 22, 1)", borderRadius: "12px" }}
            variant="rectangular"
            width={210}
            height={118}
          />
        )}
      </SuccessfulProjectsWrapper>
    </SuccessfulProjectsContainerWrapper>
  );
};

export default SuccessfulProjects;
