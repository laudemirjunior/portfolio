import styled from "styled-components";

export const ContainerBack = styled.div`
  background-color: black;
  h1 {
    color: white;
    text-align: center;
    padding: 20px 0;
  }
  .back__accordions {
    max-width: 940px;
    width: 90%;
    margin: auto;
    .back__accordion {
      h2 {
        color: white;
        cursor: pointer;
        border: 1px solid white;
        padding: 5px;
        display: flex;
        align-items: center;
      }
      svg {
        margin-left: 20px;
      }
      div {
        background-color: white;
        margin: 0;
        padding: 5px;
        width: 100%;

        p {
          color: black;
          margin: 5px 0;
        }
        a {
          color: black;
          border: 1px solid black;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px 0;
          :hover {
            opacity: 0.7;
          }
        }
      }
    }
    .back__down {
      transform: rotate(180deg);
    }
    .back__hidden {
      display: none;
    }
  }
`;
