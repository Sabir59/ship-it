import React from "react";
import { Box } from "../../styles/globalStyles";
import { Logo } from "../../UI";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Box>
          <Logo />
          <Location>
            Islamabad, Territory, 26 Street E-11 / 4 Punjab Pakistan
          </Location>
        </Box>
        <Lists>
          <List>
            <Item>About</Item>
            <Item>
              <Link>Automations</Link>
            </Item>
          </List>
          <List>
            <Item>Work Flow</Item>
            <Item>
              <Link>Automations</Link>
            </Item>
          </List>
          <List>
            <Item>PORTFOLIO</Item>
            <Item>
              <Link>Automations</Link>
            </Item>
          </List>
        </Lists>
      </Content>
    </Container>
  );
};
