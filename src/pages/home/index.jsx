import React from "react";
import { Container } from "./styles";
import About from "../../components/about";
import Header from "../../components/header";
import Banner from "../../components/banner";
import AboutMe from "../../components/aboutMe";
import Skills from "../../components/skills";
import PortfolioHome from "../../components/portfolioHome";
import Footer from "../../components/footer";
import Contact from "../../components/contact";

export default function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <About />
      <AboutMe />
      <Skills />
      <PortfolioHome />
      <Contact />
      <Footer />
    </Container>
  );
}
