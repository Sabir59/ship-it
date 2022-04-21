import styled from "styled-components/macro";

export const Container = styled.header`
  min-height: 100vh;
  padding: 30px 170px;
  background: #1e1ac9;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-right: 80px;
  }

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 200px 20px 168px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 80px;
    padding: 10px 54px;
    border-radius: 50px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 96px;
  line-height: 144px;
  text-align: center;
  color: #ffffff;
  span {
    font-weight: 200;
  }
  span:nth-of-type(2) {
    font-weight: 700;
    color: #59e7b4;
  }
`;
