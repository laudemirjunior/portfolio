import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: ${(props) => (props.props ? "white" : "black")};
  border-style: none solid;
  border-width: 2px;
  border-color: ${(props) => (props.props ? "white" : "black")};
  width: 150px;
  height: 30px;
  font-size: 20px;
  margin: 30px auto;
  :hover {
    border-style: solid solid;
    transition: 0.2s ease-in-out;
  }
`;
