import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`;

export const Container = styled.div`
  width: 90%;
  min-height: 250px;
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr;

  .info {
    h1,
    p {
      color: white;
      margin: 15px 0;
    }
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  @media (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }
`;
