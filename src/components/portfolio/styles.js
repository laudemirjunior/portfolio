import styled from "styled-components";

export const MainContainer = styled.div`
  .projects {
    width: 100%;
    max-width: 1500px;
    margin: auto;
  }
  .project {
    width: 90%;
    margin: 60px auto;
    display: flex;
    gap: 50px;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
      div {
        text-align: left;
      }
      :nth-child(even) {
        flex-direction: row-reverse;
        div {
          text-align: right;
        }
      }
    }
  }
  img {
    width: 100%;
    max-width: 350px;
    min-width: 260px;
    max-height: 250px;
  }
  .infos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .links {
    font-size: 30px;
    svg {
      margin: 5px;
      cursor: pointer;
    }
    a {
      color: black;
    }
  }
  .more {
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
