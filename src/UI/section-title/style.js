import styled from "styled-components/macro";

export const Container = styled.h2`
  font-weight: 500;
  font-size: clamp(1.13rem, calc(1.06rem + 0.37vw), 1.5rem);
  line-height: 177.9%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #1e1ac9;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: clamp(2.5rem, calc(0.49rem + 11.46vw), 14.25rem);
    height: 1px;
    background: #1e1ac9;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin-right: clamp(0.31rem, calc(0.26rem + 0.3vw), 0.63rem);
  }
`;
