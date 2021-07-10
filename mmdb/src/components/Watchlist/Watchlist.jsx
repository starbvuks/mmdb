import React from "react";
import {Link} from "react-router-dom";

import {Main, HeaderFlex, Logo, Image} from "./styleWatchlist.js";

import logo from "../../img/mmdb-logo.png";

function Watclist() {
  return (
    <Main>
      <HeaderFlex>
        <h1>Watchlist</h1>
        <Link to="/">
          <Logo>
            <Image src={logo} alt="logo" width="150" />
          </Logo>
        </Link>
      </HeaderFlex>
    </Main>
  );
}

export default Watclist;
