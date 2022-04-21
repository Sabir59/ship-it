import React from "react";
import { Link } from "react-router-dom";
import { Container, Photo } from "./styles";

export const Logo = ({ src }) => {
  return (
    <Container>
      <Link to="/">
        <Photo src={src} />
      </Link>
    </Container>
  );
};
