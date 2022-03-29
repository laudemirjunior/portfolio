import React from "react";
import { ContainerTitle } from "./styles";

export default function Title({ children, props = false }) {
  return <ContainerTitle props={props}>{children}</ContainerTitle>;
}
