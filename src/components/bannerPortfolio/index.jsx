import React from "react";
import Title from "../title";
import { Container } from "./styles";

export default function BannerPortfolio() {
  return (
    <Container>
      <Title children="PORTFOLIO" props={true}></Title>
    </Container>
  );
}
