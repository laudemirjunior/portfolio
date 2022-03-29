import styled from "styled-components";
import Banner from "../../assets/images/banner.png";

export const ContainerBanner = styled.div`
  width: 100%;
  height: 600px;
  background-color: #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Banner});
  background-size: cover;
  background-position: 60%;
  .banner__data {
    display: flex;
    height: inherit;
    width: 90%;
    max-width: 1500px;
    .banner__info {
      height: inherit;
      display: flex;
      justify-content: center;
      flex-direction: column;
      justify-content: center;
      z-index: 1;
      gap: 20px;
      color: white;
      width: 100%;
      text-shadow: 0 0 25px rgba(255, 255, 255, 0.5),
        0 0 10px rgba(255, 255, 255, 0.5);
      h3 {
        font-size: 28px;
      }
      h1 {
        font-size: 46px;
      }
      h5 {
        font-size: 20px;
      }
    }
    .banner__contact {
      display: flex;
      gap: 20px;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        background-color: #c4c4c4;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            font-size: 24px;
            color: black;
          }
        }
      }
    }
  }
`;
