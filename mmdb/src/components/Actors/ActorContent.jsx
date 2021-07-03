import React from "react";
import {Container, Content, Poster, Image, Title} from "./ActorContentStyles";

const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

function ActorContent({name, profile_path}) {
  return (
    <Container>
      <Content>
        <Poster>
          <Image src={IMAGE_API + profile_path} alt="movie" />
        </Poster>
        <Title>{name}</Title>
      </Content>
    </Container>
  );
}

export default ActorContent;

// https://www.themoviedb.org/t/p/w200//vSIuCJNvXhgVg0DwuHa0bPl5EeS.jpg
