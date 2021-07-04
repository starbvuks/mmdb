import React, {useRef, useState} from "react";
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

import {useAuth} from "../contexts/AuthContext";

import logo from "../../img/mmdb-logo.png";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const {signup, currentUser} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

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
          {console.log(currentUser)}
          <FormInputContainer onSubmit={handleSubmit}>
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
            <FormInputButton disabled={loading} type="submit">
              Submit
            </FormInputButton>
          </FormInputContainer>
        </LoginForm>
      </Container>
    </>
  );
}

export default SignIn;
