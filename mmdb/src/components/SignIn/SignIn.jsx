import React from "react";
import {
  Container,
  LoginForm,
  LoginTitle,
  UsernameForm,
  PasswordForm,
  FormInputContainer,
  FormInputButton,
} from "./SignInStyled";
import SearchIcon from "@material-ui/icons/Search";

function SignIn() {
  return (
    <Container>
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <UsernameForm type="text" />
        <PasswordForm type="password" />
        <FormInputContainer>
          <FormInputButton>Submit</FormInputButton>
        </FormInputContainer>
      </LoginForm>
    </Container>
  );
}

export default SignIn;
