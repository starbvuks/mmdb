import React from "react";
import {
  Container,
  CardContent,
  ImageDiv,
  Poster,
  Title,
  Ratings,
  Rating,
  BottomPortion,
} from "./MovieCardStyles";

const IMAGE_API = "https://www.themoviedb.org/t/p/w300/";

function MainCard({title, poster_path, vote_average}) {
  return (
    <Container>
      <CardContent>
        <ImageDiv>
          <Poster src={IMAGE_API + poster_path} alt="movie" width="100%" />
        </ImageDiv>
        <BottomPortion>
          <Title>{title}</Title>
          <Ratings>
            <Rating name="half-rating-read">{vote_average}</Rating>
          </Ratings>
        </BottomPortion>
      </CardContent>
    </Container>
  );
}

export default MainCard;
