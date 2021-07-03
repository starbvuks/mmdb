import React from "react";

import {Container, Main} from "./MovieListStyles";

const api_key = process.env.REACT_APP_API_KEY;

const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1&language=en-US`;

function MovieList() {
  return (
    <Container>
      <Main>Movie List</Main>
    </Container>
  );
}
export default MovieList;
