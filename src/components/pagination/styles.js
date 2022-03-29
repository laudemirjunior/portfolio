import styled from "styled-components";

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 10px;
  svg {
    color: white;
    font-size: 25px;
    cursor: pointer;
  }
  .pagination__page {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: white;
    border: 1px solid white;
    font-weight: 600;
    :hover {
      opacity: 0.7;
    }
  }
`;
