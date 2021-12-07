import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: ${(props) => (props.vis ? "flex" : "none")};
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  background-color: black;
`;

export const HeaderStyled = styled.div`
  transition: top 0.3s;
  width: inherit;
  max-width: 1500px;
  width: 90%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  img {
    width: 50px;
  }
`;

export const NavBox = styled.div`
  display: none;
  a {
    padding: 8px 25px;
    color: white;
  }
  .dif {
    background-color: white;
    color: black;
    border-radius: 30px;
  }
  @media (min-width: 600px) {
    display: flex;
  }
`;

export const Hamburguer = styled.div`
  cursor: pointer;
  display: flex;
  svg {
    font-size: 40px;
    color: white;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
