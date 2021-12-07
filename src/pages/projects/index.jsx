import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Portfolio from "../../components/portfolio";
import { Container } from "./styles";

export default function Projects() {
  return (
    <Container>
      <Header />
      <Portfolio />
      <Footer />
    </Container>
  );
}
