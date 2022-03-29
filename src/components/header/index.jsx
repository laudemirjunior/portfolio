import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Menu from "../menu";
import {
  ContainerHeader,
  HeaderStyled,
  LogoBox,
  NavBox,
  Hamburguer,
} from "./styles";
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
    if (show === false) {
      if (prevScrollpos > currentScrollPos) {
        setVis(true);
      } else {
        setVis(false);
      }
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <ContainerHeader vis={vis}>
        <div>
          <div>
            <div className="header__logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="header__links">
            <a href="#about">Sobre mim</a>
            <a href="#skills">Habilidades</a>
            <a href="#portfolio">Portfólio</a>
            <a className="header__button" href="/#contact">
              CONTATE-ME
            </a>
          </div>
          <div className="hamburger" onClick={change}>
            {show ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </ContainerHeader>
      {show ? <Menu /> : null}
    </>
  );
}
