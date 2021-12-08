import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  form {
    width: 100%;
    max-width: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 50px auto;
    input,
    textarea {
      width: 90%;
      max-width: 600px;
      height: 50px;
      background-color: transparent;
      border-style: none none solid solid;
      border-width: 5px;
      border-color: black;
      padding: 20px;
      font-size: 20px;
    }
    textarea {
      height: 150px;
      resize: none;
    }
    span {
      color: red;
      font-size: 14px;
    }
  }
`;
