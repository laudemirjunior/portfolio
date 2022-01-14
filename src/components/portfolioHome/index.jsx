import React from "react";
import { portfolio } from "../../services/portfolio";
import { Container, Cards, Card } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../button";
import BannerPortfolio from "../bannerPortfolio";

export default function PortfolioHome() {
  const history = useHistory();
  return (
    <Container id="portfolio">
      <BannerPortfolio />
      <Cards>
        <p>Principais projetos</p>
        <div className="ContainerCards">
          {portfolio.map((item) => {
            return (
              <Card style={{ backgroundImage: `url(${item.img})` }}>
                <div className="infos">
                  <h4>{item.title}</h4>
                  <h5>{item.hashtags}</h5>

                  <div>
                    <a href={item.vercel} target="_blank" rel="noreferrer">
                      <Button children="Vercel" props={false} />
                    </a>
                    <a href={item.gitHub} target="_blank" rel="noreferrer">
                      <Button children="GitHub" props={false} />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="more">
          <Button
            children={"Mais informações"}
            onClick={() => history.push("/projects")}
          ></Button>
        </div>
      </Cards>
    </Container>
  );
}
