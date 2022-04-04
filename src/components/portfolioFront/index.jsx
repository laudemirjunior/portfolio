import { useState } from "react";
import { databaseFront } from "../../services/databaseFront";
import { ContainerFront } from "./styles";
import { BsInfoCircle } from "react-icons/bs";
import Button from "../button";
import Modal from "../modal";
import Pagination from "../pagination";

export default function PortfolioFront() {
  const [info, setInfo] = useState([]);
  const [show, setShow] = useState(false);
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(6);

  return (
    <ContainerFront>
      <div className="front__container">
        <h1>Projetos Front End</h1>
        <div className="front__cards">
          {databaseFront.slice(start, finish).map((item, index) => {
            return (
              <div
                key={index}
                className="front__card"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="front__infos">
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
              </div>
            );
          })}
          {show && <Modal info={info} setShow={setShow} />}
        </div>
      </div>
      <Pagination
        database={databaseFront}
        start={start}
        setStart={setStart}
        finish={finish}
        setFinish={setFinish}
        perPage={6}
      />
    </ContainerFront>
  );
}
