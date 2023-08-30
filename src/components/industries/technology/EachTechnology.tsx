import {
  InovationInfo,
  InovationName,
  InovationSkil,
} from "./TechnologyStyles";

import { useState } from "react";
import { Arrow45, Arrow } from "../../../assets/industries";

interface EachTechnologyInterface {
  id: number;
  title: string;
  info: string;
}

const EachTechnology = (prop: EachTechnologyInterface) => {
  const [id, setId] = useState(0);

  const moveOnSkil = (idSkil: number) => {
    console.log(idSkil, "enter");
    setId(idSkil);
  };

  const leaveOnSkil = (idSkil: number) => {
    console.log(idSkil, "leave");
    setId(0);
  };

  return (
    <InovationSkil
      onMouseMove={() => moveOnSkil(prop.id)}
      onMouseLeave={() => leaveOnSkil(prop.id)}
    >
      <InovationName active={prop.id !== id}>
        <p
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: "12px",
              height: "12px",
              marginRight: "12px",
              backgroundColor: "rgba(212, 245, 76, 1)",
              opacity: prop.id == id ? 1 : 0,
            }}
          ></span>{" "}
          <span style={{ display: "block" }}> {prop.title}</span>
        </p>{" "}
        <img src={`${prop.id !== id ? Arrow : Arrow45}`} alt="" />
      </InovationName>
      <InovationInfo>{prop.info}</InovationInfo>
    </InovationSkil>
  );
};

export default EachTechnology;
