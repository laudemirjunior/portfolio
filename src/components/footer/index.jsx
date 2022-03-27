import React from "react";
import { Container } from "./styles";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      <div className="back">
        <p onClick={scrollTop}>
          <BsChevronDoubleUp />
        </p>
        <h3>VOLTAR AO TOPO</h3>
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/nlaudemir/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/laudemirjunior"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a href="mailto:nlaudemir@gmail.com? Subject=Título%20da%20mensagem">
          <AiOutlineMail />
        </a>
      </div>
      <div>Laudemir - 2022</div>
    </Container>
  );
}
