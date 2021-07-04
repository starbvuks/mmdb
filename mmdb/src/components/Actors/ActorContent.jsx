import React from "react";
import {
  Container,
  Content,
  Poster,
  Image,
  OnHover,
  Name,
} from "./ActorContentStyles";

import "./ActorContent.css";

const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function ActorContent({name, profile_path}) {
  return (
    <Container>
      <Content>
        <Poster className="img-wrap">
          <Image src={IMAGE_API + profile_path} alt="movie" />
          <OnHover className="img-desc">
            <Name>{name}</Name>
          </OnHover>
        </Poster>
      </Content>
    </Container>
  );
}

export default ActorContent;
