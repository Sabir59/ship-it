import styled from "styled-components/macro";

export const Container = styled.div``;

export const Content = styled.div`
  padding: 45px 70px;
  background: #eff7ff;
  border-radius: 15px 0px 0px 15px;
  margin-top: 56px;
  display: grid;
  grid-column-gap: 90px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Card = styled.div``;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 30px;
  line-height: 45px;
  color: #455b71;
`;

export const Text = styled.p`
  margin-top: 30px;
  font-weight: 300;
  font-size: 17px;
  line-height: 174.5%;
  color: #6b6c70;
`;
