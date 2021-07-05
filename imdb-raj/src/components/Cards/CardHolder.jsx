import React from "react";
import MovieCard from "./MovieCard.jsx";

import styled from "styled-components";

function CardHolder() {
  return (
    <Container>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Container>
  );
}

export default CardHolder;

const Container = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
`;
