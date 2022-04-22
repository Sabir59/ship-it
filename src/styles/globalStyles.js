import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
}

body {
  font-family: 'Poppins', sans-serif;
}
`;

export const MainContainer = styled.div`
  max-width: 1920px;
  padding: 30px 170px 30px 300px;
  margin: 0 auto;
  background: ${(props) => (props.bg ? props.bg : "#fff")};
`;

export const SectionContainer = styled.div`
  max-width: 1920px;
  padding: clamp(3.13rem, calc(2.16rem + 5.49vw), 8.75rem) 0 10px
    clamp(1.25rem, calc(0.61rem + 3.66vw), 5rem);
  margin: 0 auto;
`;

export const RightContainer = styled.div`
  max-width: 1920px;
  padding-left: clamp(0.63rem, calc(-2.47rem + 17.68vw), 18.75rem);
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  align-items: ${({ item }) => (item ? item : "center")};
  justify-content: ${({ content }) => (content ? content : "space-between")};
  flex-grow: ${({ grow }) => (grow ? grow : "auto")};
`;

export const Box = styled.div``;

// background:${(props) => props.theme.background};
// color:${(props) => props.theme.text};
