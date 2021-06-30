import React from "react";
import logo from "../img/mmdb-logo.png";

import {Link} from "react-router-dom";

import {
  Main,
  Logo,
  HeaderSearchInput,
  HeaderSearch,
  Image,
} from "./HomeStyles.js";

function Home() {
  return (
    <Main>
      <HeaderSearch>
        {/* <TextBox id="outlined-basic" variant="filled" disableUnderline="true" /> */}
        <HeaderSearchInput type="text" />
      </HeaderSearch>
      <Link to="/">
        <Logo>
          <Image src={logo} alt="logo" width="110" />
        </Logo>
      </Link>
    </Main>
  );
}

export default Home;
