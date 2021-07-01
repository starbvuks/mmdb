import styled from "styled-components";

export const Container = styled.div``;

export const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
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
