import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  opacity: ${(props) => (props.vis ? "1" : "0")};
  margin-top: ${(props) => (props.vis ? "0" : "-80px")};
  justify-content: center;
  position: fixed;
  z-index: 2;
  top: 0;
  background-color: black;
  transition: 1s;
  animation-direction: alternate;
  div {
    width: inherit;
    max-width: 1500px;
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .header__logo {
      img {
        width: 50px;
      }
    }
    .header__links {
      display: none;
      a {
        padding: 8px 15px;
        color: white;
      }
      .header__button {
        background-color: white;
        color: black;
        border-radius: 30px;
        padding: 10px;
      }
      @media (min-width: 800px) {
        display: flex;
      }
    }
  }
  .hamburger {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    svg {
      font-size: 40px;
      color: white;
    }
    @media (min-width: 800px) {
      display: none;
    }
  }
`;
