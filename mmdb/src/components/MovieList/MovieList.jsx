import React, {useState, useEffect} from "react";
import {Container, HeadSection, Logo, Main, Header} from "./MovieListStyles";
import {Link} from "react-router-dom";

import MovieListItems from "./MovieListItems.jsx";
import logo from "../../img/mmdb-logo.png";

const api_key = process.env.REACT_APP_API_KEY;
const LATEST_API = `
https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`;

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(LATEST_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
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
        {movies.length > 0 &&
          movies.map((movie) => <MovieListItems key={movie.id} {...movie} />)}
      </Main>
    </Container>
  );
}
export default MovieList;
