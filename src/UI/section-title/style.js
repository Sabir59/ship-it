import styled from "styled-components/macro";

export const Container = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 177.9%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #1e1ac9;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: 228px;
    height: 1px;
    background: #1e1ac9;
    transform: matrix(1, 0, 0, -1, 0, 0);
    margin-right: 10px;
  }
`;
