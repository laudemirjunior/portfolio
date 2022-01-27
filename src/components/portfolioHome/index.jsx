import React, { useState } from "react";
import { portfolio } from "../../services/portfolio";
import { Container, Cards, Card } from "./styles";
import { useHistory } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import Button from "../button";
import BannerPortfolio from "../bannerPortfolio";
import Modal from "../modal";

export default function PortfolioHome() {
  const history = useHistory();
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Container id="portfolio">
      <BannerPortfolio />
      <Cards>
        <p>Principais projetos</p>
        <div className="ContainerCards">
          {portfolio.slice(0, 6).map((item) => {
            return (
              <Card style={{ backgroundImage: `url(${item.img})` }}>
                <div className="infos">
                  <h4>{item.title}</h4>
                  <h5>{item.hashtags}</h5>
                  <BsInfoCircle
                    onClick={() => {
                      setInfo([item.title, item.description, item.hashtags]);
                      setShow(true);
                    }}
                  />
                  <div>
                    <a href={item.site} target="_blank" rel="noreferrer">
                      <Button children="Site" props={false} />
                    </a>
                    <a href={item.gitHub} target="_blank" rel="noreferrer">
                      <Button children="GitHub" props={false} />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
          {show && <Modal info={info} setShow={setShow} />}
        </div>
        <div className="more">
          <Button
            children={"Todos os projetos"}
            onClick={() => history.push("/projects")}
          ></Button>
        </div>
      </Cards>
    </Container>
  );
}
