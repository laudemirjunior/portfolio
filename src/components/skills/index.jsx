import React from "react";
import Title from "../title";
import { Container, MainContainer } from "./styles";
import { abilities } from "../../services/abilities";

export default function Skills() {
  return (
    <MainContainer id="skills">
      <Container>
        <Title>HABILIDADES</Title>
        <div className="techs">
          <div className="tech">
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
      </Container>
    </MainContainer>
  );
}
