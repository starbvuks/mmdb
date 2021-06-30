// import packages
import React from "react";
import {Link} from "react-router-dom";

// import icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MovieIcon from "@material-ui/icons/Movie";
import StarIcon from "@material-ui/icons/Star";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import MenuBookIcon from "@material-ui/icons/MenuBook";

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
      <AppBarStyled position="static" style={{backgroundColor: "#2f3b3e"}}>
        <ToolbarStyled>
          <HeaderText>
            Welcome To{" "}
            <Link to="/" style={{textDecoration: "none"}}>
              <HeaderTextBold>MMDb</HeaderTextBold>
            </Link>
          </HeaderText>
          {/* <Divider /> */}
          <Li>
            <Link to="/login" style={{color: "inherit"}}>
              <AccountBoxIcon style={{fontSize: iconSize}} />
            </Link>
          </Li>
          <Li>
            <Link to="/movies" style={{color: "inherit"}}>
              <MovieIcon style={{fontSize: iconSize}} />
            </Link>
          </Li>
          <Li>
            <Link to="/actors" style={{color: "inherit"}}>
              <StarIcon style={{fontSize: iconSize}} />
            </Link>
          </Li>
          <Li>
            <Link to="/watchlist" style={{color: "inherit"}}>
              <AddToQueueIcon style={{fontSize: iconSize}} />
            </Link>
          </Li>
          <Li>
            <Link to="/reviews" style={{color: "inherit"}}>
              <MenuBookIcon style={{fontSize: iconSize}} />
            </Link>
          </Li>
        </ToolbarStyled>
      </AppBarStyled>
    </Container>
  );
}

export default Header;
