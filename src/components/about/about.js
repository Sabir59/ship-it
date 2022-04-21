import React from "react";
import { RightContainer } from "../../styles/globalStyles";
import { SectionTitle } from "../../UI";
import { Card, Container, Content, Text, Title } from "./style";

export const About = () => {
  return (
    <Container>
      <SectionTitle>We Are Creative In</SectionTitle>
      <RightContainer>
        <Content>
          <Card>
            <Title>UI/UX Design</Title>
            <Text>
              study online is an open source online community who believe that
              education should be affordable to everyone for freestudy online is
              an open source online community who believe that education should
              be affordable to everyone for free
            </Text>
          </Card>
          <Card>
            <Title>Web Development</Title>
            <Text>
              study online is an open source online community who believe that
              education should be affordable to everyone for freestudy online is
              an open source online community who believe that education should
              be affordable to everyone for free
            </Text>
          </Card>
          <Card>
            <Title>App Development</Title>
            <Text>
              study online is an open source online community who believe that
              education should be affordable to everyone for freestudy online is
              an open source online community who believe that education should
              be affordable to everyone for free
            </Text>
          </Card>
        </Content>
      </RightContainer>
    </Container>
  );
};
