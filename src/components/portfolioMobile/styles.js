import styled from "styled-components";

export const ContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  text-align: center;
  color: white;
  .mobile__slider {
    max-width: 940px;
    width: 80%;
  }
  h1,
  h3,
  p {
    margin: 20px;
  }
  img {
    width: 100%;
    margin: auto;
    padding: 10px;
    cursor: pointer;
    :hover {
      filter: opacity(0.8);
    }
  }
  .mobile__image {
    background: rgba(0, 0, 0, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
    .mobile__show {
      width: auto;
      height: 100%;
      :hover {
        filter: opacity(1);
      }
    }
  }
`;
