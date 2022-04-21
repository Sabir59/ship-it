import React from "react";
import { Box, MainContainer } from "../../styles/globalStyles";
import { Button, SectionTitle } from "../../UI";
import {
  Container,
  Content,
  Form,
  Heading,
  Input,
  Location,
  Message,
} from "./style";

export const Contact = () => {
  return (
    <Container>
      <SectionTitle>Contact us</SectionTitle>
      <MainContainer>
        <Content>
          <Heading>Drop us your Query</Heading>
          <Box>
            <Location>
              Islamabad, Territory, 26 Street E-11 / 4 Punjab Pakistan
            </Location>
            <Form>
              <Input placeholder='Name' />
              <Input placeholder='Email' />
              <Message placeholder='Message' rows={8}></Message>
              <Button>Send</Button>
            </Form>
          </Box>
        </Content>
      </MainContainer>
    </Container>
  );
};
