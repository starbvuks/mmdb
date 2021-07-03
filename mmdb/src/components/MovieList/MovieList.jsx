import React from "react";

import {Container, Main} from "./MovieListStyles";

const API_KEY = "5e86a10fe6baf06ca1a742fa8c4fdc2d";
const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1&language=en-US`;

function MovieList() {
  return (
    <Container>
      <Main>Movie List</Main>
    </Container>
  );
}
export default MovieList;
