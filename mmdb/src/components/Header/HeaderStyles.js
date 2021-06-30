import styled from "styled-components";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";

export const Container = styled.div`
  width: 7.5rem;
`;

export const AppBarStyled = styled(AppBar)`
  padding: 0;
  margin: 0;
  height: 100vh;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.span`
  font-family: "Poppins";
  background-color: #5f3850;
  color: #fdc4b9;
  padding: 20px 21px 30px 20px;
`;

export const HeaderTextBold = styled.span`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 800;
  color: var(--text-yellow);
  display: block;
`;

// export const Divider = styled.hr`
//   background-color: #a3c65c;
//   border: 2px solid #a3c65c;
//   margin: 0;
//   width: 115px;
// `;

export const Li = styled.div`
  margin-top: 10px;
  padding-top: 50px;
  color: var(--text-yellow);
  list-style: none;
`;
