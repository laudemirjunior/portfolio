import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  svg {
    cursor: pointer;
    color: white;
  }
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  .icons {
    display: flex;
    gap: 20px;
    font-size: 30px;
  }
`;
