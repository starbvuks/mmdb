import React, {useState, useEffect} from "react";
import {Container, HeadSection, Main, Header} from "./MovieListStyles";

import MovieListItems from "./MovieListItems.jsx";

const api_key = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1&language=en-US`;

function MovieList() {
  const [movies, setMovies] = useState([]);

  return (
    <Container>
      <HeadSection>
        <Header>newest releases</Header>
      </HeadSection>
      <Main>
        <MovieListItems />
      </Main>
    </Container>
  );
}
export default MovieList;
