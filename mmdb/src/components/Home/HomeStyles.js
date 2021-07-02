import styled from "styled-components";
// import {TextField} from "@material-ui/core";

import logo from "../../img/mmdb-logo.png";

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 20px 35% 0 13%;
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
  height: 50px;
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
  height: 50px;
  width: 50px;

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
  margin: 30px 16vh 0 0;
`;

export const Image = styled.img``;

export const HiglightedHead = styled.span`
  display: flex;
  justify-content: left;
  margin: 5px 0 0 27vh;
  font-size: 38pt;
  color: #d7e6d0;
  font-family: "Poppins";
  font-weight: 600;
`;
