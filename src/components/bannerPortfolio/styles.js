import styled from "styled-components";
import Image from "../../assets/images/image2.jpg";

export const Container = styled.div`
  width: 100%;
  height: 320px;
  background-image: url(${Image});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
