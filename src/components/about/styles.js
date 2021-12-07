import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: inherit;
  min-height: 250px;
  max-width: 1500px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1,
  p {
    color: white;
    margin: 15px 0;
  }
`;
