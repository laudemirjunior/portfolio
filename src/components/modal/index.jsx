import React from "react";
import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

export default function Modal({ info, setShow, hashtags }) {
  return (
    <Container>
      <div className="card">
        <FaTimes onClick={() => setShow(false)} />
        <h2>{info[0]}</h2>
        <p>{info[1]}</p>
        <p>Tecnologias utilizadas: {info[2]}</p>
      </div>
    </Container>
  );
}
