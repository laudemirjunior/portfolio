import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: ${(props) => (props.props ? "white" : "black")};
  border-style: none solid;
  border-width: 2px;
  border-color: ${(props) => (props.props ? "white" : "black")};
  max-width: 200px;
  width: 100%;
  min-width: 100px;
  height: 30px;
  font-size: 20px;
  margin: 30px auto;
  padding: 0 10px;
  :hover {
    border-style: solid;
    transition: 0.01s;
  }
`;
