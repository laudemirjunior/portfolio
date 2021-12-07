import React from "react";
import Button from "../button";
import { Container, MainContainer } from "./styles";
import H1 from "../title";
import { FaWrench, FaPencilAlt } from "react-icons/fa";
import Separator from "../separator";

export default function AboutMe() {
  return (
    <MainContainer id="aboutMe">
      <Container>
        <H1>ABOUT ME</H1>
        <div className="infos">
          <p>
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
          <Button children="EXPLORE" props={false} />
        </div>
        <Separator />
        <div className="cards">
          <div className="card">
            <FaWrench />
            <h1>DEVELOPMENT</h1>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="card">
            <FaPencilAlt />
            <h1>MAINTENANCE</h1>
            <p>
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>
        <Separator />
      </Container>
    </MainContainer>
  );
}
