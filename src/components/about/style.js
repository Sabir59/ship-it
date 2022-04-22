import styled from "styled-components/macro";

export const Container = styled.div``;

export const Content = styled.div`
  padding: clamp(1.25rem, calc(0.98rem + 1.52vw), 2.81rem)
    clamp(1.25rem, calc(0.72rem + 3.05vw), 4.38rem);
  background: #eff7ff;
  border-radius: 15px 0px 0px 15px;
  margin-top: clamp(1.88rem, calc(1.62rem + 1.46vw), 3.38rem);
  display: grid;
  grid-column-gap: 90px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(12.5rem, calc(11.97rem + 3.05vw), 15.63rem), 1fr)
  );
`;

export const Card = styled.div``;

export const Title = styled.h4`
  font-weight: 600;
  font-size: clamp(1.31rem, calc(1.22rem + 0.55vw), 1.88rem);
  line-height: 1.6;
  color: #455b71;
`;

export const Text = styled.p`
  margin-top: clamp(1.25rem, calc(1.14rem + 0.61vw), 1.88rem);
  font-weight: 300;
  font-size: clamp(0.94rem, calc(0.92rem + 0.12vw), 1.06rem);
  line-height: 174.5%;
  color: #6b6c70;
`;
