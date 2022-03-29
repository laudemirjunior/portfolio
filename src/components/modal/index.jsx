import React from "react";
import { ContainerModal } from "./styles";
import { FaTimes } from "react-icons/fa";

export default function Modal({ info, setShow }) {
  return (
    <ContainerModal>
      <div className="modal__card">
        <FaTimes onClick={() => setShow(false)} />
        <h2>{info[0]}</h2>
        <p>
          {info[1] ? info[1] : "Esta aplicação ainda não possui uma descrição."}
        </p>
      </div>
    </ContainerModal>
  );
}
