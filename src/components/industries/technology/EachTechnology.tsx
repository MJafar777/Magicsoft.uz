import {
  InovationInfo,
  InovationName,
  InovationSkil,
} from "./TechnologyStyles";

import { useState } from "react";
import { Arrow45, Arrow } from "../../../assets/industries";

interface EachTechnologyInterface {
  data: {
    id: number;
    Title: string;
    Info: string;
  };
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
      onMouseMove={() => moveOnSkil(prop.data.id)}
      onMouseLeave={() => leaveOnSkil(prop.data.id)}
      // className={}
    >
      <InovationName active={prop.data.id !== id}>
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
              opacity: prop.data.id == id ? 1 : 0,
            }}
          ></span>{" "}
          <span style={{ display: "block" }}> {prop.data.Title}</span>
        </p>{" "}
        <img src={`${prop.data.id !== id ? Arrow : Arrow45}`} alt="" />
      </InovationName>
      <InovationInfo>{prop.data.Info}</InovationInfo>
    </InovationSkil>
  );
};

export default EachTechnology;
