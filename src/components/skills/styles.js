import styled from "styled-components";

export const ContainerSkills = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  div {
    width: 90%;
    max-width: 950px;
    margin: auto;
    .skills__techs {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
        img {
          width: 50px;
        }
        h4 {
          width: 100px;
          text-align: center;
        }
      }
    }
  }
`;
