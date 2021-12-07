import React from "react";
import { ButtonStyled } from "./styles";

export default function Button({ children, props = true, ...rest }) {
  return (
    <ButtonStyled props={props} {...rest}>
      {children}
    </ButtonStyled>
  );
}
