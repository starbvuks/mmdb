// import packages
import React from "react";
import {Link} from "react-router-dom";

// import icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MovieIcon from "@material-ui/icons/Movie";
import StarIcon from "@material-ui/icons/Star";
import AddToQueueIcon from "@material-ui/icons/AddToQueue";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {useAuth} from "../contexts/AuthContext";

// import files

// import styled components
import {
  Container,
  AppBarStyled,
  ToolbarStyled,
  HeaderText,
  HeaderTextBold,
  ByMe,
  Li,
} from "./HeaderStyles.js";
import "./header.css";

function Header() {
  const iconSize = 50;
  const {currentUser} = useAuth();
  const account = () => {
    if (typeof (currentUser && currentUser.email) === "string") {
      return currentUser && currentUser.email;
    } else {
      return "Account";
    }
  };

  return (
    <Container>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <HeaderText>
            Welcome To{" "}
            <Link to="/" style={{textDecoration: "none"}}>
              <HeaderTextBold>MMDb</HeaderTextBold>
            </Link>
            <ByMe href="https://github.com/starbvuks">By sarvag kalari</ByMe>
          </HeaderText>
          {/* <Divider /> */}
          <Li>
            <Link to="/login" style={{color: "inherit"}}>
              <AccountBoxIcon
                className="acc-icon"
                style={{fontSize: iconSize}}
              />
              <span className="acc">{account()}</span>
            </Link>
          </Li>
          <Li>
            <Link to="/movies" style={{color: "inherit"}}>
              <MovieIcon className="acc-icon" style={{fontSize: iconSize}} />
              <span className="acc">Movie List</span>
            </Link>
          </Li>
          <Li>
            <Link to="/actors" style={{color: "inherit"}}>
              <StarIcon className="acc-icon" style={{fontSize: iconSize}} />
              <span className="acc">Actors</span>
            </Link>
          </Li>
          <Li>
            <Link to="/watchlist" style={{color: "inherit"}}>
              <AddToQueueIcon
                className="acc-icon"
                style={{fontSize: iconSize}}
              />
              <span className="acc">Watchlist</span>
            </Link>
          </Li>
          <Li>
            <Link to="/reviews" style={{color: "inherit"}}>
              <MenuBookIcon className="acc-icon" style={{fontSize: iconSize}} />
              <span className="acc">Reviews</span>
            </Link>
          </Li>
        </ToolbarStyled>
      </AppBarStyled>
    </Container>
  );
}

export default Header;
