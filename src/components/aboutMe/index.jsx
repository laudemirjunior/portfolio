import React from "react";
import { Container, MainContainer } from "./styles";
import H1 from "../title";

import Button from "../button";

export default function AboutMe() {
  return (
    <MainContainer id="aboutMe">
      <Container>
        <H1>SOBRE MIM</H1>
        <div className="infos">
          <p>
            Sempre fui apaixonado por tecnologia, mas nunca havia pensado em ter
            uma carreira na área até que me surgiu a oportunidade para estudar
            Desenvolvimento Full Stack na Kenzie Academy Brasil em 2021. Então
            iniciei uma mudança de área profissional para TI. Estou-me inserindo
            no mercado de desenvolvimento, buscando uma oportunidade na área.
          </p>
          <p>
            Tecnologias: HTML | CSS | JavaScript | React | Redux | Context API |
            TypeScript | Vue.js | Python | Flask | MongoDB | PostgreSQL | Git |
            Scrum | styled-components | SASS | Material-UI | Chakra UI |
            Bootstrap | TDD | BDD
          </p>
          <Button props={false}>
            <a
              href="https://www.canva.com/design/DAEyDsBZt_Q/XtE-gSsV5LQIeQ8OPTeOng/view?utm_content=DAEyDsBZt_Q&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
          </Button>
        </div>
      </Container>
    </MainContainer>
  );
}
