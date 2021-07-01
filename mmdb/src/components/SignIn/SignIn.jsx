import React from "react";
import {
  Container,
  HeaderSearch,
  HeaderSearchInput,
  HeaderSearchInputContainer,
} from "./SignInStyled";
import SearchIcon from "@material-ui/icons/Search";

function SignIn() {
  return (
    <Container>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchInput type="text" />
        <HeaderSearchInputContainer>
          <SearchIcon style={{fill: "#31404a"}} />
        </HeaderSearchInputContainer>
      </HeaderSearch>
    </Container>
  );
}

export default SignIn;
