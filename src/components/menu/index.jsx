import React from "react";
import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <a href="/#aboutMe">Sobre mim</a>
      <a href="/#skills">Habilidades</a>
      <a href="/#portfolio">Portfólio</a>
      <a className="dif" href="#contact">
        CONTATE-ME
      </a>
    </Container>
  );
}
