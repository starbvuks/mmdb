import React from "react";

import {
  Container,
  Main,
  Poster,
  Title,
  ReleaseDate,
  Rating,
  Description,
  Details,
} from "./MovieListItemsStyles.js";

const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function MovieListItems({
  poster_path,
  title,
  release_date,
  overview,
  vote_average,
}) {
  return (
    <Container>
      <Main>
        <Poster>
          <img src={IMAGE_API + poster_path} alt="movie" />
        </Poster>
        <Details>
          {/* <Title>{title}</Title>
          <ReleaseDate>{release_date}</ReleaseDate>
          <Rating>{vote_average}</Rating>
          <Description>{overview}</Description> */}
        </Details>
      </Main>
    </Container>
  );
}

export default MovieListItems;
