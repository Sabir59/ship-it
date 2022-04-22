import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../../UI";
import { Container, Content, Icon, Item, List, Navbar, Title } from "./style";

import logoSrc from "../../assets/images/logo-green.svg";
import menuSrc from "../../assets/images/menu-icon.svg";
import { Button } from "../../UI";

export const Header = () => {
  return (
    <Container>
      <Navbar>
        <Logo src={logoSrc} />
        <List>
          <Item>
            <Link to="/">Work</Link>
          </Item>
          <Item>
            <Link to="/">Blogs</Link>
          </Item>
          <Item>
            <Link to="/">Our Team</Link>
          </Item>
          <Item>
            <Link to="/">
              <Button primary>Contact us</Button>
            </Link>
          </Item>
        </List>
        <Icon src={menuSrc} />
      </Navbar>
      {/* Body */}
      <Content>
        <Title>
          We help <span>Entrepreneur</span> to bring their <span>IDEAS</span> into Reality
        </Title>
        <Button btnLg>Contact us</Button>
      </Content>
    </Container>
  );
};
