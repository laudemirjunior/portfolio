import React from "react";
import { Container, MainContainer } from "./styles";

export default function About() {
  return (
    <MainContainer id="about">
      <Container>
        <div className="info">
          <h1>Sobre mim</h1>
          <p>
            Sempre fui apaixonado por tecnologia, mas nunca havia pensado em ter
            uma carreira na área até que me surgiu a oportunidade para estudar
            Desenvolvimento Full Stack na Kenzie Academy Brasil em 2021. Então
            iniciei uma mudança de área profissional para TI. Estou-me inserindo
            no mercado de desenvolvimento, buscando uma oportunidade na área.
          </p>
        </div>
        <div className="img">
          <img
            src="https://ca.slack-edge.com/TQZR39SET-U022091F97Z-5c8d69ae2dbd-512"
            alt="myImage"
          ></img>
        </div>
      </Container>
    </MainContainer>
  );
}
