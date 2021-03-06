// import packages
import React, { useState, useEffect } from "react";
import { Container, HeadSection, Logo, Main, Header } from "./MovieListStyles";
import { Link } from "react-router-dom";

// import files
import MovieListItems from "./MovieListItems.jsx";
import logo from "../../img/mmdb-logo.png";

// api data : pages-1,2,3
const api_key = "5e86a10fe6baf06ca1a742fa8c4fdc2d";
const LATEST_API_1 = `
https://api.themoviedb.org/3/movie/now_playing?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US&page=1`;
const LATEST_API_2 = `
https://api.themoviedb.org/3/movie/now_playing?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US&page=2`;
const LATEST_API_3 = `
https://api.themoviedb.org/3/movie/now_playing?api_key=5e86a10fe6baf06ca1a742fa8c4fdc2d&language=en-US&page=3`;

function MovieList() {
  // set states for pages
  const [movies1, setMovies1] = useState([]);
  const [movies2, setMovies2] = useState([]);
  const [movies3, setMovies3] = useState([]);

  // FETCH ALL 3
  useEffect(() => {
    fetch(LATEST_API_1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies1(data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(LATEST_API_2)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies2(data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(LATEST_API_3)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies3(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // map data to state and send props to component

  return (
    <Container>
      <HeadSection>
        <Header>newest releases</Header>
        <Link to="/">
          <Logo>
            <img src={logo} alt="logo" width="150" />
          </Logo>
        </Link>
      </HeadSection>
      <Main>
        {movies1.length > 0 &&
          movies1.map((movie) => <MovieListItems key={movie.id} {...movie} />)}
        {movies2.length > 0 &&
          movies2.map((movie) => <MovieListItems key={movie.id} {...movie} />)}
        {movies3.length > 0 &&
          movies3.map((movie) => <MovieListItems key={movie.id} {...movie} />)}
      </Main>
    </Container>
  );
}
export default MovieList;
