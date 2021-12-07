import React from "react";
import { H1 } from "./styles";

export default function Title({ children, props = false }) {
  return <H1 props={props}>{children}</H1>;
}
