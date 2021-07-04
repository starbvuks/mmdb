import styled from "styled-components";
import {FormControl} from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  margin: 30vh 0 0 0;
`;

export const Logo = styled.div`
  position: absolute;
  margin: 2% 0 0 85%;
  z-index: 999;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

export const LoginTitle = styled.span`
  font-family: "Poppins";
  margin: 0 60vh 3vh 0;
  font-weight: 700;
  font-size: 80px;
  color: #d7e6d0;
`;

export const FormInputContainer = styled.form`
  margin: 20px 80vh 0 0;
  display: flex;
  flex-direction: column;
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
  width: 70vh;
  background-color: #667d7e;
  z-index: 999;
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
  width: 70vh;
  background-color: #667d7e;
  margin: 15px 0 0 0;
  z-index: 999;
`;

export const FormInputButton = styled.button`
  background-color: #d7e6d0;
  font-family: "Poppins";
  font-size: 18px;
  border-radius: 25px;
  justify-content: center;
  cursor: pointer;
  display: flex;
  width: 100px;
  height: auto;
  margin: 20px 0 0 0;
  z-index: 999;

  :active {
    transform: scale(1.1);
  }
`;

export const BubbleBox1 = styled.div`
  border-radius: 150px;
  background-color: #c6d45b;
  width: 250px;
  height: 250px;
  position: absolute;
  margin: 0 65% 20% 0;
  z-index: -1;
`;

export const BubbleBox2 = styled.div`
  border-radius: 150px;
  background-color: #c6d45b;
  width: 250px;
  height: 250px;
  position: absolute;
  margin: 10% 0 0 20%;
  z-index: -1;
`;

export const OverflowDiv = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const BubbleBox3 = styled.div`
  border-radius: 100%;
  background-color: #c6d45b;
  width: 650px;
  height: 650px;
  margin: 40% 0 0 3%;
  z-index: -1;
`;
