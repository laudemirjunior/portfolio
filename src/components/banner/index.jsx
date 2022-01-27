import React from "react";
import { Container, Data } from "./styles";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Banner() {
  return (
    <Container id="banner">
      <Data>
        <div className="info" id="banner">
          <h3>Olá, Eu sou</h3>
          <h1>Laudemir do Nascimento Junior</h1>
          <h5>Desenvolvedor Full Stack</h5>
          <div className="contact">
            <div>
              <a
                href="https://github.com/laudemirjunior"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithubSquare />
              </a>
            </div>

            <div>
              <a href="https://www.linkedin.com/in/nlaudemir/">
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a href="mailto:nlaudemir@gmail.com? Subject=Título%20da%20mensagem">
                <MdOutlineAlternateEmail />
              </a>
            </div>
          </div>
          <b> Telefone: (41) 99193 3980</b>
        </div>
        <div className="img"></div>
      </Data>
    </Container>
  );
}
