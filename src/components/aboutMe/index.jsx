import React from "react";
import { Container, MainContainer } from "./styles";
import H1 from "../title";
import { FaWrench, FaPencilAlt } from "react-icons/fa";
import Separator from "../separator";

export default function AboutMe() {
  return (
    <MainContainer id="aboutMe">
      <Container>
        <H1>SOBRE MIM</H1>
        <div className="infos">
          <p>
            Sempre fui apaixonado por tecnologia e tinha facilidade no contato
            com novas tecnologias, mas nunca havia pensado em ter uma carreira
            na área até me surgiu a oportunidade para estudar na Kenzie Academy
            Brasil. Atualmente curso Desenvolvimento Full Stack na Kenzie, onde
            realizo muitas entregas individuais e em grupo, desenvolvendo muitas
            habilidades técnicas, mas também, muitas soft skills, muito
            importantes para meu crescimento profissional e pessoal.
          </p>
          <p>
            Tecnologias: HTML | CSS | JavaScript | React | Redux | Context API |
            TypeScript | Vue.js | Python | Flask | MongoDB | PostgreSQL | Git |
            Scrum | styled-components | SASS | Material-UI | Chakra UI |
            Bootstrap | TDD | BDD
          </p>
        </div>
        <Separator />
        <div className="cards">
          <div className="card">
            <FaWrench />
            <h1>DESENVOLVIMENTO</h1>
            <p>
              Posso projetar o site com base nas suas necessidades e sugestões.
              Também posso projetar o site do zero e consultá-lo durante o
              trabalho.
            </p>
          </div>
          <div className="card">
            <FaPencilAlt />
            <h1>MANUTENÇÃO</h1>
            <p>
              Posso fazer a manutenção do site, seguindo boas práticas de
              mercado.
            </p>
          </div>
        </div>
        <Separator />
      </Container>
    </MainContainer>
  );
}
