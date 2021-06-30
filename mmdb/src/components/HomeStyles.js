import styled from "styled-components";
// import {TextField} from "@material-ui/core";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  overflow: "hidden";
  margin: 20px 20% 0 30%;
`;

export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border-radius: 50px;
  border: none;
  font-family: "Poppins";
  padding-left: 20px;
  font-size: 18pt;
  color: #d9e9d8;
  caret-color: #d9e9d8;
  caret-width: 2px;
  //   border: 2px solid #d9e9d8;
  background-color: #667d7e;
`;

export const HeaderSearchInputContainer = styled.button`
  background-color: #d7e6d0;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 0 0 0 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  width: 40px;

  :active {
    transform: scale(1.1);
  }
`;

// export const TextBox = styled(TextField)`
//   flex-grow: 1;
//   border-radius: 50px;
//   border: none;
//   color: #5f3850;
// `;

export const Logo = styled.div`
  position: relative;
  margin: 20px 40px 0 0;
`;

export const Image = styled.img``;
