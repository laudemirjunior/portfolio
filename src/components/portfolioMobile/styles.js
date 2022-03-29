import styled from "styled-components";

export const ContainerMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  .mobile__slider {
    max-width: 940px;
    width: 80%;
    margin: auto;
  }
  .mobile__button {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  p {
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }
  h1 {
    color: white;
    text-align: center;
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
  .image {
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
    .show {
      width: 100%;
      max-width: 450px;
      max-height: 100vh;
      :hover {
        filter: opacity(1);
      }
    }
  }
`;
