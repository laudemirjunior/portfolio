import React from "react";
import { ContainerBanner } from "./styles";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Button from "../button";

export default function Banner() {
  return (
    <ContainerBanner id="banner">
      <div className="banner__data">
        <div className="banner__info" id="banner">
          <h3>Olá, Eu sou</h3>
          <h1>Laudemir do Nascimento Junior</h1>
          <h5>Desenvolvedor Full Stack</h5>
          <div className="banner__contact">
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
          <Button>
            <a
              href="https://www.canva.com/design/DAEyDsBZt_Q/XtE-gSsV5LQIeQ8OPTeOng/view?utm_content=DAEyDsBZt_Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
          </Button>
        </div>
      </div>
    </ContainerBanner>
  );
}
