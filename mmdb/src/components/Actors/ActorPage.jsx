import React, {useEffect, useState} from "react";
import {Container, Main, HeadSection, Header, Logo} from "./ActorPageStyles";
import {Link} from "react-router-dom";

import ActorContent from "./ActorContent.jsx";

import logo from "../../img/mmdb-logo.png";

const api_key = process.env.REACT_APP_API_KEY;
const ACTORS_API = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}&language=en-US&page=1`;
console.log(ACTORS_API);

function ActorPage() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(ACTORS_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setActors(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

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
