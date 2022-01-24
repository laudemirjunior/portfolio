import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Menu from "../menu";
import { Container, HeaderStyled, LogoBox, NavBox, Hamburguer } from "./styles";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const [vis, setVis] = useState(true);
  const change = () => {
    setShow(!show);
  };
  let location = useLocation().pathname;

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
      <Container vis={vis}>
        <HeaderStyled>
          <Link to="/">
            <LogoBox>
              <img src={logo} alt="logo" />
            </LogoBox>
          </Link>
          <NavBox>
            {location === "/" ? (
              <>
                <a href="#aboutMe">Sobre mim</a>
                <a href="#skills">Habilidades</a>
                <a href="#portfolio">Portfólio</a>
                <a className="dif" href="/#contact">
                  CONTATE-ME
                </a>
              </>
            ) : null}
          </NavBox>
          {location === "/" ? (
            <Hamburguer onClick={change}>
              {show ? <FaTimes /> : <FaBars />}
            </Hamburguer>
          ) : (
            <Link className="dif" to="/">
              Voltar
            </Link>
          )}
        </HeaderStyled>
      </Container>
      {show ? <Menu /> : null}
    </>
  );
}
