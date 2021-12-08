import React from "react";
import Button from "../button";
import { Container, MainContainer } from "./styles";

export default function About() {
  return (
    <MainContainer>
      <Container>
        <div className="info">
          <h1>No momento</h1>
          <p>
            Atualmente trabalhando na Kenzie Academy Brasil ajudando os alunos
            tirando suas dúvidas, fazendo correções de suas atividades e
            acompanhando em projetos Front-end (HTML, CSS, JavaScript e React).
          </p>
        </div>
        <div className="img">
          <img
            src="https://avatars.githubusercontent.com/u/85312375?v=4"
            alt="myImage"
          ></img>
        </div>
      </Container>
    </MainContainer>
  );
}
