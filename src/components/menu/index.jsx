import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Container>
      <Link to="/projects">Todos os projetos</Link>
      <a href="/#aboutMe">Sobre mim</a>
      <a href="/#skills">Habilidades</a>
      <a href="/#portfolio">Portfólio</a>
      <a className="dif" href="#contact">
        CONTATE-ME
      </a>
    </Container>
  );
}
