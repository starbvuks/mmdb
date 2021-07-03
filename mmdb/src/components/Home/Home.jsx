import {
  Main,
  Logo,
  HeaderFlex,
  HeaderSearchInput,
  HeaderSearch,
  HeaderSearchInputContainer,
  Image,
  HiglightedHead,
} from "./HomeStyles.js";
// import packages
import React, {useEffect, useState} from "react";
import logo from "../../img/mmdb-logo.png";
import {Link} from "react-router-dom";

// import icons
import SearchIcon from "@material-ui/icons/Search";

// import files
import CardHolder from "../Cards/CardHolder";
import MovieCard from "../Cards/MovieCard.jsx";

function Home() {
  return (
    <>
      <Main>
        <HeaderFlex>
          <HeaderSearch>
            {/* <TextBox id="outlined-basic" variant="filled" disableUnderline="true" /> */}
            <HeaderSearchInput type="text" placeholder="Search" />
            <HeaderSearchInputContainer>
              <SearchIcon style={{fill: "#31404a"}} />
            </HeaderSearchInputContainer>
          </HeaderSearch>
          <Link to="/">
            <Logo>
              <Image src={logo} alt="logo" width="150" />
            </Logo>
          </Link>
        </HeaderFlex>
      </Main>
      <HiglightedHead>featured films:</HiglightedHead>
      <CardHolder />
    </>
  );
}

export default Home;
