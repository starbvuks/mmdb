// import packages
import React from "react";

// import styled components
import {
  Container,
  Main,
  Poster,
  Image,
  Details,
} from "./MovieListItemsStyles.js";

// fetch images from api
const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function MovieListItems({poster_path}) {
  return (
    <Container>
      <Main>
        <Poster>
          <Image src={IMAGE_API + poster_path} alt="movie" />
        </Poster>
        <Details></Details>
      </Main>
    </Container>
  );
}

export default MovieListItems;
