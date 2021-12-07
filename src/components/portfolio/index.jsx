import React from "react";
import { MainContainer } from "./styles";
import { SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { portfolio } from "../../services/portfolio";
import BannerPortfolio from "../bannerPortfolio";

export default function Portfolio() {
  return (
    <MainContainer id="portfolio">
      <BannerPortfolio />
      <div className="projects">
        {portfolio.map((item) => {
          return (
            <div className="project">
              <img src={item.img} alt="Burguer" />
              <div className="infos">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.hashtags}</p>
                <div className="links">
                  <SiVercel href={item.vercel} />
                  <AiFillGithub href={item.gitHub} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
}
