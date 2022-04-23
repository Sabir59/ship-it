import styled from "styled-components/macro";

export const Container = styled.header`
  padding: clamp(1.25rem, calc(1.14rem + 0.61vw), 1.88rem)
    clamp(1.25rem, calc(-0.35rem + 9.15vw), 10.63rem);
  background: #1e1ac9;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: auto;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Item = styled.li`
  &:not(:last-of-type) {
    margin-right: clamp(2.5rem, calc(-0.36rem + 4.46vw), 5rem);
  }

  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  align-self: center;
  padding: clamp(3.13rem, calc(1.52rem + 9.15vw), 12.5rem) 0
    clamp(3.13rem, calc(1.87rem + 7.2vw), 10.5rem) 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: clamp(2rem, calc(1.49rem + 2.93vw), 5rem);
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: clamp(1.81rem, calc(-0.09rem + 5.08vw), 6rem);
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  span {
    font-weight: 200;
  }
  span:nth-of-type(2) {
    font-weight: 700;
    color: #59e7b4;
  }

  @media (max-width: 514px) {
    text-align: left;
  }
`;

export const Icon = styled.img`
  max-width: 100%;
  object-fit: contain;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;
