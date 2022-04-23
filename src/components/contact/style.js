import styled from "styled-components/macro";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: clamp(4.69rem, calc(-2.31rem + 10.94vw), 10.81rem);
  grid-template-columns: repeat(
    auto-fit,
    minmax(clamp(12.5rem, calc(10.9rem + 9.15vw), 21.88rem), 1fr)
  );

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h3`
  font-weight: 600;
  font-size: clamp(3.38rem, calc(0.09rem + 5.13vw), 6.25rem);
  line-height: 1.4;
  color: #353638;
  max-width: 622px;

  @media (max-width: 1024px) {
    font-size: clamp(2.19rem, calc(1.74rem + 2.55vw), 3.38rem);
  }
`;

export const Location = styled.h5`
  font-weight: 500;
  font-size: clamp(0.94rem, calc(0.8rem + 0.79vw), 1.75rem);
  line-height: 116%;
  color: #434449;
  margin-bottom: clamp(1.25rem, calc(0.74rem + 2.93vw), 4.25rem);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(0.94rem, calc(0.78rem + 0.91vw), 1.88rem);

  button {
    align-self: flex-end;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 7px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 182.5%;
  color: #000;
  border-bottom: 1px solid #42434e;
  &::placeholder {
    color: #6c6c75;
  }
`;

export const Message = styled.textarea`
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 1px solid #42434e;
`;
