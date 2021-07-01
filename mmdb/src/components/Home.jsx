// import packages
import React from "react";
import logo from "../img/mmdb-logo.png";
import {Link} from "react-router-dom";

// import icons
import SearchIcon from "@material-ui/icons/Search";

// import files
import CardHolder from "./Cards/CardHolder";

import {
  Main,
  Logo,
  HeaderSearchInput,
  HeaderSearch,
  HeaderSearchInputContainer,
  Image,
  HiglightedHead,
} from "./HomeStyles.js";

function Home() {
  return (
    <>
      <Main>
        <HeaderSearch>
          {/* <TextBox id="outlined-basic" variant="filled" disableUnderline="true" /> */}
          <HeaderSearchInput type="text" />
          <HeaderSearchInputContainer>
            <SearchIcon style={{fill: "#31404a"}} />
          </HeaderSearchInputContainer>
        </HeaderSearch>
        <Link to="/">
          <Logo>
            <Image src={logo} alt="logo" width="125" />
          </Logo>
        </Link>
      </Main>
      <HiglightedHead>Popular Films</HiglightedHead>
      <CardHolder />
    </>
  );
}

export default Home;
