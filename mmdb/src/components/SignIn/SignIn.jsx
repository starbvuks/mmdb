import React from "react";
import {
  Container,
  LoginForm,
  LoginTitle,
  UsernameForm,
  PasswordForm,
  FormInputContainer,
  FormInputButton,
  BubbleBox1,
  BubbleBox2,
  BubbleBox3,
  OverflowDiv,
  Logo,
} from "./SignInStyled";
import {Link} from "react-router-dom";

import logo from "../../img/mmdb-logo.png";

function SignIn() {
  return (
    <>
      <Link to="/">
        <Logo>
          <img src={logo} alt="logo" width="175" />
        </Logo>
      </Link>
      <Container>
        <LoginForm>
          <BubbleBox1 />
          <BubbleBox2 />
          <OverflowDiv>
            <BubbleBox3 />
          </OverflowDiv>
          <LoginTitle>Login</LoginTitle>
          <FormInputContainer>
            <UsernameForm type="text" placeholder="Username" />
            <PasswordForm type="password" placeholder="Password" />
            <FormInputButton>Submit</FormInputButton>
          </FormInputContainer>
        </LoginForm>
      </Container>
    </>
  );
}

export default SignIn;
