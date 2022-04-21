import React from "react";
import { Container } from "./style";

export const Button = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
