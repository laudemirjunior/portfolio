import styled from "styled-components";

export const Container = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.div`
  background-color: black;
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .ContainerCards {
    display: flex;
    flex-wrap: wrap;
    width: 940px;
    gap: 10px;
  }
`;

export const Card = styled.div`
  cursor: pointer;
  height: 230px;
  width: 300px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .infos {
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 60%;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  &:hover .infos,
  :hover {
    display: flex;
    transition: 0.2s ease-in-out;
  }
`;
