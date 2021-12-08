import React from "react";
import Button from "../button";
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
            Sou formado em Administração pela Isulpar e trabalhei 6 anos no
            setor administrativo. Formado em Desenvolvedor Front-end e estudando
            desenvolvimento Back-end na Kenzie Academy Brasil, onde estou
            desenvolvendo muitas habilidades técnicas, mas também, desenvolvendo
            muitas soft skills, muito importantes para meu crescimento
            profissional e pessoal.
          </p>
          <p>
            Tecnologias: HTML, CSS, JavaScript (ES6+), React, React Native,
            Redux-Thunk, TypeScript(TS + TSX), Vue.js, Node.js, Python, Flask,
            APIRestful, POO, TDD, BDD (Cucumber), Git, SCRUM, e Heroku.
          </p>
          {/* <Button children="EXPLORE" props={false} /> */}
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
              Posso projetar o site com base nas suas necessidades e sugestões.
              eu posso também desenhe o site do zero e consulte-o durante o
              trabalho.
            </p>
          </div>
        </div>
        <Separator />
      </Container>
    </MainContainer>
  );
}
