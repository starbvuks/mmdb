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
    <BoxStyled>
      <ContainerStyled maxWidth="lg">
        <GridStyled container spacing={5}>
          <GridItem item xs={12} sm={4}>
            <FooterItem></FooterItem>
          </GridItem>
        </GridStyled>
      </ContainerStyled>
    </BoxStyled>
  );
}

export default Footer;
