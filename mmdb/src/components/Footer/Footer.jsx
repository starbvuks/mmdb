// import packages
import React from "react";
import logo from "../../img/mmdb-logo.png";

// import styled components
import {
  ContainerStyled,
  BoxStyled,
  GridStyled,
  GridItem,
  FooterItem,
  FooterLogo,
  Img,
  Span,
} from "./FooterStyles.js";

// grid based content
function Footer() {
  return (
    <BoxStyled bgcolor="#2f3b3e">
      <ContainerStyled maxWidth="lg">
        <GridStyled container spacing={5}>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Contact</FooterItem>
            <FooterItem>Support</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Account</FooterItem>
            <FooterItem>Register</FooterItem>
            <FooterItem>Privacy</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterItem>Backup</FooterItem>
            <FooterItem>History</FooterItem>
            <FooterItem>Devtools</FooterItem>
          </GridItem>
          <GridItem item xs={12} sm={3}>
            <FooterLogo>
              <Img src={logo} alt="logo" width="120" />
              <Span>MyMovieDatabase</Span>
            </FooterLogo>
          </GridItem>
        </GridStyled>
      </ContainerStyled>
    </BoxStyled>
  );
}

export default Footer;
