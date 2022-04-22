import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Photo = styled.img`
  width: clamp(6.25rem, calc(5.45rem + 4.57vw), 10.94rem);
  object-fit: contain;
`;
