import styled from "styled-components/macro";

export const Container = styled.div``;

export const Content = styled.div`
  display: grid;
  grid-column-gap: 115px;
  //   justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;

export const Heading = styled.h3`
  font-weight: 600;
  font-size: 100px;
  line-height: 150px;
  color: #353638;
  max-width: 622px;
`;

export const Location = styled.h5`
  font-weight: 500;
  font-size: 28px;
  line-height: 116%;
  color: #434449;
  max-width: 412px;
  margin-bottom: 68px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

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
