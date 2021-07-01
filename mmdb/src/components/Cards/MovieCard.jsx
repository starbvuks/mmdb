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

function MainCard() {
  return (
    <Container>
      <CardContent>
        <ImageDiv>
          <Poster
            src="https://www.filmonpaper.com/wp-content/uploads/2011/05/TheShining_onesheet_advance_UK_SaulBass-1.jpg"
            alt="movie"
            height="400"
          />
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
