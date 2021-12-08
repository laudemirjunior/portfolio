import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Menu from "../menu";
import { Container, HeaderStyled, LogoBox, NavBox, Hamburguer } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [show, setShow] = useState(false);
  const [vis, setVis] = useState(true);
  const change = () => {
    setShow(!show);
  };

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setVis(true);
    } else {
      setVis(false);
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Container vis={vis}>
        <HeaderStyled>
          <a href="/#banner">
            <LogoBox>
              <img src={logo} alt="logo" />
            </LogoBox>
          </a>
          <NavBox>
            <a href="/#aboutMe">Sobre mim</a>
            <a href="/#skills">Habilidades</a>
            <a href="/#portfolio">Portfólio</a>
            <a className="dif" href="#contact">
              CONTATE-ME
            </a>
          </NavBox>
          <Hamburguer onClick={change}>
            {show ? <FaTimes /> : <FaBars />}
          </Hamburguer>
        </HeaderStyled>
      </Container>
      {show ? <Menu /> : null}
    </>
  );
}
