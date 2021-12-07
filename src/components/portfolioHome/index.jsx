import React from "react";
import { portfolio } from "../../services/portfolio";
import { Container, Cards, Card } from "./styles";
import { useHistory } from "react-router-dom";
import Button from "../button";
import BannerPortfolio from "../bannerPortfolio";

export default function PortfolioHome() {
  const history = useHistory();
  return (
    <Container>
      <BannerPortfolio />
      <Cards>
        <div className="ContainerCards">
          {portfolio.map((item) => {
            return (
              <Card style={{ backgroundImage: `url(${item.img})` }}>
                <div className="infos">
                  <h4>{item.title}</h4>
                  <h5>{item.hashtags}</h5>
                  <Button children="More" props={false}></Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Cards>
      <div className="more">
        <Button
          children={"Mais projetos"}
          props={false}
          onClick={() => history.push("/projects")}
        ></Button>
      </div>
    </Container>
  );
}
