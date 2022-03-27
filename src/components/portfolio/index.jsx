import React, { useState } from "react";
import { portfolio } from "../../services/portfolio";
import { Container, Cards, Card } from "./styles";
import {
  BsInfoCircle,
  BsArrowLeftSquare,
  BsArrowRightSquare,
} from "react-icons/bs";
import Button from "../button";
import BannerPortfolio from "../bannerPortfolio";
import Modal from "../modal";

export default function Portfolio() {
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(6);
  const max = 6;

  const pagination = () => Math.ceil(portfolio.length / 6);

  const change = (index) => {
    setStart(index * max);
    setFinish((index + 1) * max);
  };

  const left = () => {
    if (start !== 0) {
      setStart(start - max);
      setFinish(finish - max);
    }
  };

  const right = () => {
    if (start <= pagination) {
      setStart(start + max);
      setFinish(finish + max);
    }
  };

  return (
    <Container id="portfolio">
      <BannerPortfolio />
      <Cards>
        <p>Projetos Front End</p>
        <div className="ContainerCards">
          {portfolio.slice(start, finish).map((item) => {
            return (
              <Card style={{ backgroundImage: `url(${item.img})` }}>
                <div className="infos">
                  <h4>{item.title}</h4>
                  <h5>{item.hashtags}</h5>
                  <BsInfoCircle
                    onClick={() => {
                      setInfo([item.title, item.description]);
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
        <div className="pagination">
          <div
            onClick={left}
            style={start / 6 === 0 ? { display: "none" } : { display: "flex" }}
          >
            <BsArrowLeftSquare />
          </div>
          {Array.from({ length: pagination() }).map((item, index) => {
            return (
              <div
                className="page"
                onClick={() => change(index)}
                style={
                  start / 6 === index ? { backgroundColor: "#cccccc99" } : {}
                }
              >
                {index + 1}
              </div>
            );
          })}
          <div
            onClick={right}
            style={
              start / 6 === pagination() - 1
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <BsArrowRightSquare />
          </div>
        </div>
      </Cards>
    </Container>
  );
}
