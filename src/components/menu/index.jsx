import React from "react";
import { ContainerMenu } from "./styles";

export default function Menu() {
  return (
    <ContainerMenu>
      <a href="/#aboutMe">Sobre mim</a>
      <a href="/#skills">Habilidades</a>
      <a href="/#portfolio">Portfólio</a>
      <a className="dif" href="#contact">
        CONTATE-ME
      </a>
    </ContainerMenu>
  );
}
