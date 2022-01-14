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
            Atualmente estou estudando Desenvolvimento back-end na Kenzie
            Academy Brasil.
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
