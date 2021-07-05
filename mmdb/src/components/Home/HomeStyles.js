import styled from "styled-components";
// import {TextField} from "@material-ui/core";

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 25px 9% 0 15%;
`;

export const HeaderSearch = styled.div``;

export const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border-radius: 50px;
  border: none;
  font-family: "Poppins";
  font-weight: 600;
  padding-left: 20px;
  font-size: 18pt;
  color: #d9e9d8;
  caret-color: #d9e9d8;
  caret-width: 2px;
  width: 55vh;
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

export const Logo = styled.div``;

export const Image = styled.img`
  position: relative;
`;

export const HiglightedHead = styled.span`
  display: flex;
  justify-content: left;
  margin: 5px 0 0 15%;
  font-size: 38pt;
  color: #d7e6d0;
  font-family: "Poppins";
  font-weight: 600;
`;
