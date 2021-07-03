import styled from "styled-components";
import {AppBar, Toolbar} from "@material-ui/core";

export const Container = styled.div`
  width: 7.5rem;
  position: fixed;
  height: 100vh;
`;

export const AppBarStyled = styled(AppBar)`
  padding: 0;
  margin: 0;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  height: 100vh;
  background-color: #2f3b3e;
  flex-direction: column;
`;

export const HeaderText = styled.span`
  font-family: "Poppins";
  background-color: #3b5058;
  color: #c3d8c8;
  padding: 20px 21px 18px 20px;
`;

export const HeaderTextBold = styled.span`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: 800;
  color: var(--text-yellow);
  display: block;
`;

export const ByMe = styled.a`
  font-size: 9px;
  color: #b9d7c6;

  :link {
    text-decoration: none;
  }
`;

// export const Divider = styled.hr`
//   background-color: #a3c65c;
//   border: 2px solid #a3c65c;
//   margin: 0;
//   width: 115px;
// `;

export const Li = styled.div`
  padding-top: 60px;
  color: var(--text-yellow);
  list-style: none;
`;
