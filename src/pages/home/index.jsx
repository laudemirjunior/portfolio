import React from "react";
import { Container } from "./styles";
import About from "../../components/about";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Skills from "../../components/skills";
import Portfolio from "../../components/portfolio";
import Footer from "../../components/footer";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Container>
  );
}
