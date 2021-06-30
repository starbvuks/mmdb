import React from "react";
import styled from "styled-components";
import logo from "../img/mmdb-logo.png";

import {Link} from "react-router-dom";

function Home() {
  return (
    <Main>
      <Link to="/">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Link>
    </Main>
  );
}

export default Home;

const Main = styled.div`
  color: white;
  display: flex;
  flex: 1;
  margin-top: 20px;
  position: absolute;
  margin-left: 88%;
`;

export const Logo = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
`;
