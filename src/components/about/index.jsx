import React from "react";
import { Container, MainContainer } from "./styles";

export default function About() {
  return (
    <MainContainer>
      <Container>
        <div className="info">
          <h1>No momento</h1>
          <p>
            Atualmente estou estudando Desenvolvimento Back-end na Kenzie
            Academy Brasil e busco uma oportunidade no mercado de trabalho como
            desenvolvedor.
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
