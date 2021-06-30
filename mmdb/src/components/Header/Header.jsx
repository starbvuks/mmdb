// import packages
import React from "react";
import {Route, Link} from "react-router-dom";

// import icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MovieIcon from "@material-ui/icons/Movie";
import StarIcon from "@material-ui/icons/Star";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";

// import files

// import styled components
import {
  Container,
  AppBarStyled,
  ToolbarStyled,
  HeaderText,
  HeaderTextBold,
  Divider,
  Li,
} from "./HeaderStyles.js";

function Header() {
  const iconSize = 50;
  return (
    <Container>
      <AppBarStyled position="static" style={{backgroundColor: "#2e3c48"}}>
        <ToolbarStyled>
          <HeaderText>
            Welcome To <HeaderTextBold>MMDb</HeaderTextBold>
          </HeaderText>
          <Divider />
          <Link to="/login">
            <Li>
              <AccountBoxIcon style={{fontSize: iconSize}} />
            </Li>
          </Link>
          <Link to="/movies">
            <Li>
              <MovieIcon style={{fontSize: iconSize}} />
            </Li>
          </Link>
          <Li>
            <StarIcon style={{fontSize: iconSize}} />
          </Li>
          <Li>
            <AddToQueueIcon style={{fontSize: iconSize}} />
          </Li>
        </ToolbarStyled>
      </AppBarStyled>
    </Container>
  );
}

export default Header;
