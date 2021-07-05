// import packages`
import React from "react";

// import styled-components
import {
  Container,
  Content,
  Poster,
  Image,
  OnHover,
  Name,
} from "./ActorContentStyles";

// import styles
import "./ActorContent.css";

// fetch api data
const IMAGE_API = "https://www.themoviedb.org/t/p/w200/";

// get api data
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
