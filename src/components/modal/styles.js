import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal__card {
    width: 90%;
    max-width: 400px;
    min-height: 240px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  h2,
  h3,
  p {
    margin: 20px;
    color: black;
    font-size: 1.2rem;
  }
  svg {
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;
