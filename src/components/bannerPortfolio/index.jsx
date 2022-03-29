import React from "react";
import Title from "../title";
import { ContainerPortfolioBanner } from "./styles";

export default function PortfolioBanner() {
  return (
    <ContainerPortfolioBanner>
      <Title children="PORTFÓLIO" props={true}></Title>
    </ContainerPortfolioBanner>
  );
}
