import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard.jsx";

import styled from "styled-components";

// import api related

const FEATURED_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US&query=";

function CardHolder() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const moviesRes = await fetch(FEATURED_API);
      const moviesR = await moviesRes.json();
      setMovies(moviesR);
    }
  }, []);

  return (
    <Container>
      {movies.map((movie) => (
        <MovieCard />
      ))}
    </Container>
  );
}

export default CardHolder;

const Container = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
`;
