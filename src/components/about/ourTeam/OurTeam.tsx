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

const dataOfTeamMember = [
  {
    img: Team_member_1,
    name: "Louis",
    specialty: "Team Leader",
  },
  {
    img: Team_member_2,
    name: "Louis",
    specialty: "Team Leader",
  },
  {
    img: Team_member_3,
    name: "Ja’far",
    specialty: "Bekorchi xo'ja",
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
  return (
    <OurTeamWrapper bg={OurTeamBg}>
      <ContentOfTeam>
        <h3>Our Team</h3>
        <p>
          Tempus neque, mi, enim commodo augue rhoncus sagittis. Convallis
          libero, proin consequat ultrices congue nunc sit consectetur.
        </p>
      </ContentOfTeam>
      <ContainerImgs>
        {dataOfTeamMember.map((worker, index) => (
          <InfoEachWorker key={index}>
            {/* <Team_member_1 /> */}
            <img src={worker.img} alt="" />
            <NameOfWorker>{worker.name}</NameOfWorker>
            <Specialty>{worker.specialty}</Specialty>
          </InfoEachWorker>
        ))}
      </ContainerImgs>
    </OurTeamWrapper>
  );
};

export default OurTeam;
