import React from "react";

import {
  ContainerStyled,
  BoxStyled,
  GridStyled,
  GridItem,
  FooterItem,
} from "./FooterStyles.js";

function Footer() {
  return (
    <BoxStyled bgcolor="#5f3850">
      <ContainerStyled maxWidth="lg">
        <GridStyled container spacing={5}>
          <GridItem item xs={12} sm={4}>
            <FooterItem>Contact</FooterItem>
            <FooterItem>Support</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={4}>
            <FooterItem>Account</FooterItem>
            <FooterItem>Register</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={4}>
            <FooterItem>Backup</FooterItem>
            <FooterItem>History</FooterItem>
            <FooterItem>Devtools</FooterItem>
          </GridItem>
        </GridStyled>
      </ContainerStyled>
    </BoxStyled>
  );
}

export default Footer;
