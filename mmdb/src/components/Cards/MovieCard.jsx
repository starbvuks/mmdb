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
            src="https://images-na.ssl-images-amazon.com/images/I/91fcWt3BHJL._SL1500_.jpg"
            alt="movie"
            height="375"
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
          <Title>Drive</Title>
        </BottomPortion>
      </CardContent>
    </Container>
  );
}

export default MainCard;
