import React from "react";
import { Container, Data } from "./styles";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Banner() {
  return (
    <Container id="banner">
      <Data>
        <div className="info" id="banner">
          <h3>Hi, I am</h3>
          <h1>Laudemir do Nascimento Junior</h1>
          <h5>Front-end Developer</h5>
          <div className="contact">
            <div>
              <FaGithubSquare />
            </div>
            <div>
              <FaLinkedin />
            </div>
            <div>
              <MdOutlineAlternateEmail />
            </div>
          </div>
        </div>
        <div className="img"></div>
      </Data>
    </Container>
  );
}
