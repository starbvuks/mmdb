import React from "react";
import {
  Container,
  LoginForm,
  UsernameForm,
  PasswordForm,
  HeaderSearchInputContainer,
} from "./SignInStyled";
import SearchIcon from "@material-ui/icons/Search";

function SignIn() {
  return (
    <Container>
      <LoginForm>
        <UsernameForm type="text" />
        <PasswordForm type="password" />
        <HeaderSearchInputContainer>Submit</HeaderSearchInputContainer>
      </LoginForm>
    </Container>
  );
}

export default SignIn;
