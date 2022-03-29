import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/";
import React from "react";
import About from "../src/components/about";
import Header from "../src/components/header";
import Banner from "../src/components/banner";
import Skills from "../src/components/skills";
import Footer from "../src/components/footer";
import Contact from "../src/components/contact";
import PortfolioFront from "../src/components/portfolioFront";
import PortfolioBack from "../src/components/portfolioBack";
import PortfolioMobile from "../src/components/portfolioMobile";
import PortfolioBanner from "../src/components/bannerPortfolio";

function App() {
  const pathname = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      <About />
      <Skills />
      <PortfolioBanner />
      <PortfolioFront />
      <PortfolioBack />
      <PortfolioMobile />
      <Contact />
      <Footer />
      <Toaster position="bottom-left" />
    </>
  );
}

export default App;
