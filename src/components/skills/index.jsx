import React from "react";
import Title from "../title";
import { ContainerSkills } from "./styles";
import { abilities } from "../../services/abilities";

export default function Skills() {
  return (
    <ContainerSkills id="skills">
      <div>
        <Title>HABILIDADES</Title>
        <div className="skills__techs">
          {abilities.map((item) => {
            return (
              <div>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </ContainerSkills>
  );
}
