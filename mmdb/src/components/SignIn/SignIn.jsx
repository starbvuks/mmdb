import React, {useRef} from "react";
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
  const emailRef = useRef();
  const passwordRef = useRef();
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
          <LoginTitle>Sign Up</LoginTitle>
          <FormInputContainer>
            <UsernameForm
              type="email"
              placeholder="yourid@provider.com"
              spellCheck="false"
              ref={emailRef}
              required
            />
            <PasswordForm
              type="password"
              placeholder="Password"
              autocorrect="off"
              autocomplete="off"
              ref={passwordRef}
              spellCheck="false"
              required
            />
            <FormInputButton>Submit</FormInputButton>
          </FormInputContainer>
        </LoginForm>
      </Container>
    </>
  );
}

export default SignIn;
