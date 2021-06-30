import styled from "styled-components";
import {AppBar, Toolbar, Divider, Button} from "@material-ui/core";

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
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const HeaderTextBold = styled.span`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 800;
  color: var(--text-yellow);
  display: block;
`;

export const Dividers = styled.(Divider)`
  width: auto;
`;

export const Li = styled.div`
  margin-top: 10px;
  padding-top: 50px;
  color: var(--text-yellow);
  list-style: none;
`;
