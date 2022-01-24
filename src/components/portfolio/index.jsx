import React, { useEffect } from "react";
import { MainContainer } from "./styles";
import { SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { portfolio } from "../../services/portfolio";
import BannerPortfolio from "../bannerPortfolio";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <MainContainer id="portfolio">
      <BannerPortfolio />
      <div className="projects">
        {portfolio
          .sort(() => 0.5 - Math.random())
          .map((item, index) => {
            return (
              <div
                className="project"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <img src={item.img} alt="Burguer" />
                <div className="infos">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>{item.hashtags}</p>
                  <div className="links">
                    <a href={item.vercel} target="_blank" rel="noreferrer">
                      <SiVercel />
                    </a>
                    <a href={item.gitHub} target="_blank" rel="noreferrer">
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </MainContainer>
  );
}
