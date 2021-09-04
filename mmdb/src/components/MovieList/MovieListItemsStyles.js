import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0 0 50px;
`;

export const Main = styled.div`
  font-family: "Poppins";
  background-color: var(--text-yellow);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  height: 98%;
`;

export const Image = styled.img`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  height: 100%;
  border-radius: 10px;
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--text-yellow);
  text-align: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  overflow: scroll;
  padding: 0 2vw;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Name = styled.span`
  font-family: "Poppins";
  font-weight: 600;
`;

export const Overview = styled.span`
  font-family: "Poppins";
  font-weight: 300;
  font-size: small;
  color: #3b5058;
  max-height: 75%;
`;

export const Poster = styled.div`
  height: 100%;

  &:hover ${Details} {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Title = styled.span``;

export const ReleaseDate = styled.span``;

export const Rating = styled.span``;

export const Description = styled.span``;
