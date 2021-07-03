import React from "react";
import {Container, Content, Poster, Image, Title} from "./ActorContentStyles";

const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function ActorContent({name, profile_path}) {
  return (
    <Container>
      <Content>
        <Poster>
          <Image
            className="img-wrap"
            src={IMAGE_API + profile_path}
            alt="movie"
          />
        </Poster>
        <Title className="img-desc">{name}</Title>
      </Content>
    </Container>
  );
}

export default ActorContent;
