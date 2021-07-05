import styled from "styled-components";
import {Container, Grid, Box} from "@material-ui/core";

export const BoxStyled = styled(Box)`
  color: white;
  margin-top: 90vh;
  font-family: "Poppins";
  font-weight: 500;
`;

export const ContainerStyled = styled(Container)`
  text-align: center;
`;

export const GridStyled = styled(Grid)`
  padding: 30px;
`;

export const GridItem = styled(Grid)``;

export const FooterItem = styled(Box)``;

export const FooterLogo = styled(Box)`
  display: flex;
`;

export const Img = styled.img``;

export const Span = styled(Box)`
  font-size: 20px;
  padding: 12% 0 0 2%;
  color: var(--text-yellow);
`;
