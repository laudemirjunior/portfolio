import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .ContainerCards {
    display: flex;
    flex-wrap: wrap;
    max-width: 940px;
    width: 90%;
    gap: 10px;
  }
  p {
    color: white;
    margin: 20px 0;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  height: 230px;
  width: 300px;
  margin: auto;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .infos {
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 90%;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    div {
      display: flex;
      a {
        margin: 0 10px;
        button {
        }
      }
    }
  }
  &:hover .infos,
  :hover {
    display: flex;
    transition: 0.01s ease-in;
  }
`;
