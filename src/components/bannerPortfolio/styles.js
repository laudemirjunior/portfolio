import styled from "styled-components";
import Banner from "../../assets/images/banner2.jpg";

export const ContainerPortfolioBanner = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${Banner});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
