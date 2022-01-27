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
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin: auto;
  }
`;
