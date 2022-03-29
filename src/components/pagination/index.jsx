import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs";
import { ContainerPagination } from "./styles";
export default function Pagination({
  database,
  start,
  setStart,
  finish,
  setFinish,
  perPage,
}) {
  const pagination = Math.ceil(database.length / perPage);

  const remove = () => {
    const btn = document.querySelectorAll(".open");
    const arrow = document.querySelectorAll(".direction");
    btn.forEach((_, index) => {
      btn[index].classList.add("hidden");
      arrow[index].classList.remove("down");
    });
  };

  const change = (index) => {
    setStart(index * perPage);
    setFinish((index + 1) * perPage);
    remove();
  };

  const left = () => {
    setStart(start - perPage);
    setFinish(finish - perPage);
    remove();
  };

  const right = () => {
    setStart(start + perPage);
    setFinish(finish + perPage);
    remove();
  };

  return (
    <ContainerPagination>
      <div
        onClick={left}
        style={start === 0 ? { display: "none" } : { display: "flex" }}
      >
        <BsArrowLeftSquare />
      </div>
      {Array.from({ length: pagination }).map((_, index) => {
        return (
          <div
            className="pagination__page"
            onClick={() => change(index)}
            style={
              start / perPage === index ? { backgroundColor: "#cccccc99" } : {}
            }
          >
            {index + 1}
          </div>
        );
      })}
      <div
        onClick={right}
        style={
          start / perPage === pagination - 1
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <BsArrowRightSquare />
      </div>
    </ContainerPagination>
  );
}
