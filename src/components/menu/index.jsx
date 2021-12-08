import React from "react";
import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <a href="/">Sobre mim</a>
      <a href="/">Habilidades</a>
      <a href="/">Portfólio</a>
      <a className="dif" href="/">
        CONTATE-ME
      </a>
    </Container>
  );
}
