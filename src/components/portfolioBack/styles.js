import styled from "styled-components";

export const ContainerBack = styled.div`
  background-color: black;
  h1 {
    color: white;
    text-align: center;
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
      }
      div {
        background-color: white;
        margin: 0;
        padding: 5px;

        width: 100%;
        p {
          color: black;
        }
        a {
          color: black;
          border: 1px solid black;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          :hover {
            background-color: #000000aa;
          }
        }
        .back__down {
          transform: rotate(180deg);
        }
      }
    }
    .back__hidden {
      display: none;
    }
  }
`;
