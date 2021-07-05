// import packages
import React, {useEffect, useState} from "react";
import {Container, Main, HeadSection, Header, Logo} from "./ActorPageStyles";
import {Link} from "react-router-dom";

// import files
import ActorContent from "./ActorContent.jsx";
import logo from "../../img/mmdb-logo.png";

// get api data
const api_key = process.env.REACT_APP_API_KEY;
const ACTORS_API = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=1`;

function ActorPage() {
  // set state
  const [actors, setActors] = useState([]);

  // set data and handle error
  useEffect(() => {
    fetch(ACTORS_API)
      .then((res) => res.json())
      .then((data) => {
        setActors(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  // map data
  return (
    <Container>
      <HeadSection>
        <Header>popular actors</Header>
        <Link to="/">
          <Logo>
            <img src={logo} alt="logo" width="150" />
          </Logo>
        </Link>
      </HeadSection>
      <Main>
        {actors.length > 0 &&
          actors.map((actor) => <ActorContent key={actor.id} {...actor} />)}
      </Main>
    </Container>
  );
}

export default ActorPage;
