import { css } from "styled-components";
import styled from "styled-components/macro";

export const Container = styled.button`
  outline: none;
  border: none;
  background: #59e7b4;
  border-radius: 30px;
  font-weight: 600;
  color: #fff;
  font-size: 17px;
  line-height: 20px;
  padding: 10px 30px;
  cursor: pointer;

  ${({ btnSm, btnLg }) =>
    btnSm
      ? css``
      : btnLg
      ? css`
          padding: clamp(0.75rem, calc(0.68rem + 0.43vw), 1.19rem)
            clamp(1.88rem, calc(1.62rem + 1.46vw), 3.38rem);
          border-radius: 50px;
          font-weight: 500;
          font-size: clamp(1.13rem, calc(1.06rem + 0.37vw), 1.5rem);
        `
      : ""}
`;
