import React from "react";
import { Container } from "./styles";

export default function Menu() {
  return (
    <Container>
      <a href="/">About me</a>
      <a href="/">Skills</a>
      <a href="/">Portfolio</a>
      <a className="dif" href="/">
        CONTACT ME
      </a>
    </Container>
  );
}
