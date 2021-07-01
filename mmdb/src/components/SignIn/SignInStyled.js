import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 30vh 0 0 0;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const LoginTitle = styled.span`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 45px;
`;

export const UsernameForm = styled.input`
  flex-grow: 1;
  border-radius: 50px;
  border: none;
  font-family: "Poppins";
  padding-left: 20px;
  font-size: 18pt;
  color: #d9e9d8;
  caret-color: #d9e9d8;
  caret-width: 2px;
  width: 40%;
  background-color: #667d7e;
`;

export const PasswordForm = styled.input`
  flex-grow: 1;
  border-radius: 50px;
  border: none;
  font-family: "Poppins";
  padding-left: 20px;
  font-size: 18pt;
  color: #d9e9d8;
  caret-color: #d9e9d8;
  caret-width: 2px;
  width: 40%;
  background-color: #667d7e;
  margin: 15px 0 0 0;
`;

export const FormInputContainer = styled.div`
  margin-right: 60vh;
`;

export const FormInputButton = styled.button`
  background-color: #d7e6d0;
  font-family: "Poppins";
  font-size: 18px;
  border-radius: 25px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  width: 175px;
  margin: 15px 0 0 0;
  height: auto;

  :active {
    transform: scale(1.1);
  }
`;
