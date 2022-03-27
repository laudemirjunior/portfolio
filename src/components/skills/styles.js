import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;

  img {
    width: 50px;
  }
  .techs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .text {
    width: 100%;
    max-width: 900px;
    h3 {
      margin: 60px 0;
    }
  }
  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 12.5px;
    width: 100%;
    max-width: 900px;
    font-size: 14px;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }
    h4 {
      width: 100px;
      text-align: center;
    }
  }
`;
