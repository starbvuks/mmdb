import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard.jsx";

import styled from "styled-components";

// import api related

const FEATURED_API =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&page=1&language=en-US";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US&query=";

function CardHolder() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Container>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </Container>
    </>
  );
}

export default CardHolder;

const Container = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 75px;
  display: flex;
  z-index: 1000;
`;
