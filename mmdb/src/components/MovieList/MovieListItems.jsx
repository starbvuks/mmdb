// import packages
import React from "react";

// import styled components
import {
  Container,
  Main,
  Poster,
  Image,
  Details,
  Top,
  Name,
  Rating,
  Overview,
} from "./MovieListItemsStyles.js";

// fetch images from api
const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function MovieListItems({ poster_path, title, vote_average, overview }) {
  return (
    <Container>
      <Main>
        <Poster>
          <Image src={IMAGE_API + poster_path} alt="movie" />
          <Details>
            <Top>
              <Name>{title}</Name>
              <Rating>{vote_average}</Rating>
            </Top>
            <Overview>{overview}</Overview>
          </Details>
        </Poster>
      </Main>
    </Container>
  );
}

export default MovieListItems;
