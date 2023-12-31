import { Link } from "react-router-dom";
import {
  OurTeamBg,
  Team_member_1,
  Team_member_2,
  Team_member_3,
  Team_member_4,
  Team_member_5,
  Team_member_6,
  Team_member_7,
} from "../../../assets/about";

import {
  ContainerImgs,
  ContentOfTeam,
  InfoEachWorker,
  NameOfWorker,
  OurTeamWrapper,
  Specialty,
} from "./OurTeamStyles";
import useLocales from "../../../locales/useLocales";

const dataOfTeamMember = [
  {
    img: Team_member_1,
    name: "Behzod",
    specialty: "Frontend developer",
    link: "https://www.linkedin.com/in/behzod-hamroyev-586345226/",
  },
  {
    img: Team_member_2,
    name: "Umid",
    specialty: "Team Leader",
    link: "https://www.linkedin.com/in/umid-rustamov/",
  },
  {
    img: Team_member_3,
    name: "Ja’far",
    specialty: "Frontend developer",
    link: "https://jafarbek.uz/",
  },
  {
    img: Team_member_4,
    name: "Louis",
    specialty: "Team Leader",
  },
  {
    img: Team_member_5,
    name: "Louis",
    specialty: "Team Leader",
  },
  {
    img: Team_member_6,
    name: "Louis",
    specialty: "Team Leader",
  },
  {
    img: Team_member_7,
    name: "Louis",
    specialty: "Team Leader",
  },
];

const OurTeam = () => {
  const { translate } = useLocales();

  return (
    <OurTeamWrapper bg={OurTeamBg}>
      <ContentOfTeam>
        <h3>{translate("teamTitle")}</h3>
        <p>{translate("teamSubtile")}</p>
      </ContentOfTeam>
      <ContainerImgs>
        {dataOfTeamMember.map((worker, index) => (
          <InfoEachWorker key={index}>
            <Link
              style={{ listStyle: "none" }}
              target="_blank"
              to={worker.link ? worker.link : ""}
            >
              {/* <Team_member_1 /> */}
              <img src={worker.img} alt="" />
              <NameOfWorker>{worker.name}</NameOfWorker>
              <Specialty>
                {worker.specialty == "Team Leader"
                  ? translate("teamLead")
                  : worker.specialty}
              </Specialty>
            </Link>
          </InfoEachWorker>
        ))}
      </ContainerImgs>
    </OurTeamWrapper>
  );
};

export default OurTeam;
