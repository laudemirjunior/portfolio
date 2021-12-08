import React from "react";
import Title from "../title";
import { Container, MainContainer } from "./styles";
import { usingNow } from "../../services/usingNow";
import { learning } from "../../services/learning";
import { othersSkills } from "../../services/otherSkills";

export default function Skills() {
  return (
    <MainContainer id="skills">
      <Container>
        <Title>HABILIDADES</Title>
        <div className="techs">
          <div className="text">
            <h3>USANDO AGORA:</h3>
          </div>
          <div className="tech">
            {usingNow.map((item) => {
              return (
                <div>
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="techs">
          <div className="text">
            <h3>APRENDENDO:</h3>
          </div>
          <div className="tech">
            {learning.map((item) => {
              return (
                <div>
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="techs">
          <div className="text">
            <h3>OUTRAS HABILIDADES :</h3>
          </div>
          <div className="tech">
            {othersSkills.map((item) => {
              return (
                <div>
                  <img src={item.img} alt={item.name} />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}
