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

function MainCard(poster_path, title, vote_average) {
  return (
    <Container>
      <CardContent>
        <ImageDiv>
          <Poster src={poster_path} alt="movie" height="400" />
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
          <Title>The Shining</Title>
        </BottomPortion>
      </CardContent>
    </Container>
  );
}

export default MainCard;
