import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

// import files
import logo from "../../img/mmdb-logo.png";

// import styled components
import {
  Container,
  AppBarStyled,
  ToolbarStyled,
  IconButtonStyled,
  Logo,
  Ul,
  Li,
} from "./HeaderStyles.js";

function Header() {
  return (
    <Container>
      <AppBarStyled position="static" style={{backgroundColor: "#2e3c48"}}>
        <ToolbarStyled>
          <Ul>
            <Li>
              <IconButtonStyled edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButtonStyled>
            </Li>
            <Li>
              <Logo>
                <img src={logo} alt="logo" width="100" />
              </Logo>
            </Li>
          </Ul>
        </ToolbarStyled>
      </AppBarStyled>
    </Container>
  );
}

export default Header;
