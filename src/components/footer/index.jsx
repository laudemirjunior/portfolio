import React from "react";
import { Container } from "./styles";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <Container>
      <div className="back">
        <a href="/#banner">
          <BsChevronDoubleUp />
        </a>
        <h3>BACK TO TOP</h3>
      </div>
      <div className="icons">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagram />
        <AiOutlineMail />
      </div>
      <div>@2020 Laudemir All Rights Reserved.</div>
    </Container>
  );
}
