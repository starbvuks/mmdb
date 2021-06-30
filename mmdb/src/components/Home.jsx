import React from "react";
import logo from "../img/mmdb-logo.png";

import {Link} from "react-router-dom";

import {Main, Logo, HeaderSearchInput, HeaderSearch} from "./HomeStyles.js";

function Home() {
  return (
    <Main>
      <HeaderSearch>
        {/* <TextBox id="outlined-basic" variant="filled" /> */}
        <HeaderSearchInput type="text" />
      </HeaderSearch>
      <Link to="/">
        <Logo>
          <img src={logo} alt="logo" width="110" />
        </Logo>
      </Link>
    </Main>
  );
}

export default Home;
