import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  img {
    margin: 60px auto;
  }
  .infos {
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin: auto;
  }
  .cards {
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
  }
  .card {
    width: 450px;
    height: 100px;
    svg {
      position: absolute;
      opacity: 0.5;
      font-size: 34px;
    }
    h1 {
      margin-left: 50px;
      font-size: 22px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      font-weight: bold;
      text-align: justify;
    }
  }
`;
