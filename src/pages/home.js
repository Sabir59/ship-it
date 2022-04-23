import React from "react";
import { About, Contact, Header } from "../components";
import { SectionContainer } from "../styles/globalStyles";

const Home = () => {
  return (
    <>
      <Header />
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <Contact />
      </SectionContainer>
    </>
  );
};

export default Home;
