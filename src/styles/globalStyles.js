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
  padding: 140px 0 10px 80px;
  margin: 0 auto;
`;

export const RightContainer = styled.div`
  max-width: 1920px;
  padding-left: 300px;
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
