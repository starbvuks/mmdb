// import packages
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import files
import MovieCard from "./MovieCard.jsx";

// import api data
const api_key = "5e86a10fe6baf06ca1a742fa8c4fdc2d";

const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&page=1&language=en-US`;
// TBI - const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&page=1&language=en-US`;

function CardHolder() {
  // set state
  const [movies, setMovies] = useState([]);

  // feth data and handle errors
  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
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
  margin: 0 0 0 6%;
  display: flex;
  z-index: 1000;
`;
