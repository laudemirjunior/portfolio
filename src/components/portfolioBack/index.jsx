import { databaseBack } from "../../services/databaseBack";
import { ContainerBack } from "./styles";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Pagination from "../pagination";

export default function PortfolioBack() {
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(6);

  const accordion = (index) => {
    const btn = document.querySelectorAll(".back__open");
    const arrow = document.querySelectorAll(".back__direction");
    btn[index].classList.toggle("back__hidden");
    arrow[index].classList.toggle("back__down");
  };

  return (
    <ContainerBack>
      <h1>Projetos Back End</h1>
      <div className="back__accordions">
        {databaseBack.slice(start, finish).map((item, index) => {
          return (
            <div key={index} className="back__accordion">
              <h2 onClick={() => accordion(index)}>
                {item.title}
                <IoIosArrowDown className="back__direction" />
              </h2>
              <div className="back__open back__hidden">
                <p>
                  {item.description
                    ? item.description
                    : "Esta aplicação ainda não possui uma descrição."}
                </p>
                {"   "}
                <a href={item.gitHub} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        database={databaseBack}
        start={start}
        setStart={setStart}
        finish={finish}
        setFinish={setFinish}
        perPage={6}
      />
    </ContainerBack>
  );
}
