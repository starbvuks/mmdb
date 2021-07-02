import React from "react";
import {
  Container,
  CardContent,
  ImageDiv,
  Poster,
  Title,
  Ratings,
  BottomPortion,
} from "./MovieCardStyles";

import {Rating} from "@material-ui/lab";

const IMAGE_API = "https://www.themoviedb.org/t/p/w300/";

function MainCard({title, poster_path}) {
  return (
    <Container>
      <CardContent>
        <ImageDiv>
          <Poster src={IMAGE_API + poster_path} alt="movie" />
        </ImageDiv>
        <BottomPortion>
          <Ratings>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </Ratings>
          <Title>{title}</Title>
        </BottomPortion>
      </CardContent>
    </Container>
  );
}

export default MainCard;
