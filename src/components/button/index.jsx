import React from "react";
import { ContainerButton } from "./styles";

export default function Button({ children, props = true, ...rest }) {
  return (
    <ContainerButton props={props} {...rest}>
      {children}
    </ContainerButton>
  );
}
