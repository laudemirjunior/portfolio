import styled from "styled-components";

export const ContainerFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  .front__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: white;
      margin: 20px 0;
      font-size: 30px;
    }
    .front__cards {
      min-height: 500px;
      display: flex;
      flex-wrap: wrap;
      max-width: 940px;
      width: 90%;
      gap: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .front__card {
        height: 230px;
        min-width: 300px;
        max-width: 300px;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        .front__infos {
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
        &:hover .front__infos,
        :hover {
          display: flex;
          transition: 0.01s ease-in;
        }
      }
    }
  }
`;
