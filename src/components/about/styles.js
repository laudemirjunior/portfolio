import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  div {
    width: 90%;
    min-height: 200px;
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr;
    .about__info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h1,
      p {
        color: white;
        margin: 15px 0;
      }
    }
    .about__image {
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 600px) {
        justify-content: flex-end;
      }
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 30px 0;
        @media (min-width: 600px) {
          margin: 0;
        }
      }
    }
    @media (min-width: 600px) {
      grid-template-columns: 3fr 1fr;
    }
  }
`;
