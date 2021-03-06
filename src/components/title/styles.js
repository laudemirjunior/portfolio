import styled from "styled-components";

export const ContainerTitle = styled.h1`
  background-color: transparent;
  color: ${(props) => (props.props ? "white" : "black")};
  border: 4px solid ${(props) => (props.props ? "white" : "black")};
  max-width: 900px;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  font-weight: 400;
`;
