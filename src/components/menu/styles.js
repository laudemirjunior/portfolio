import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 80px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
    display: none;
  }
`;
