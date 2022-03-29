import React from "react";
import { ContainerAbout } from "./styles.js";

export default function About() {
  return (
    <ContainerAbout id="about">
      <div>
        <div className="about__info">
          <h1>Sobre mim</h1>
          <p>
            Sempre fui apaixonado por tecnologia, mas nunca havia pensado em ter
            uma carreira na área até que me surgiu a oportunidade para estudar
            Desenvolvimento Full Stack na Kenzie Academy Brasil em 2021. Então
            iniciei uma mudança de área profissional para TI. Estou-me inserindo
            no mercado de desenvolvimento, buscando uma oportunidade na área.
          </p>
        </div>
        <div className="about__image">
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U022091F97Z-5c8d69ae2dbd-512"
            alt="myImage"
          ></img>
        </div>
      </div>
    </ContainerAbout>
  );
}
