import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pagination {
    display: flex;
    margin: 10px auto;
    gap: 10px;
    svg {
      color: white;
      font-size: 25px;
      cursor: pointer;
    }
    .page {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      color: white;
      border: 1px solid white;
      font-weight: 600;
    }
  }
`;

export const Cards = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .ContainerCards {
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    max-width: 940px;
    width: 90%;
    gap: 10px;
  }
  p {
    color: white;
    margin: 20px 0;
    font-size: 30px;
  }
`;

export const Card = styled.div`
  height: 230px;
  width: 300px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .infos {
    display: none;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 90%;
    height: 90%;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 5px;
      font-size: 20px;
      cursor: pointer;
    }
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
