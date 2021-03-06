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

  const change = (index) => {
    setStart(index * perPage);
    setFinish((index + 1) * perPage);
  };

  const left = () => {
    setStart(start - perPage);
    setFinish(finish - perPage);
  };

  const right = () => {
    setStart(start + perPage);
    setFinish(finish + perPage);
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
            key={index}
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
