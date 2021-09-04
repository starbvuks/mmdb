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

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
`;

export const Name = styled.span`
  font-family: "Poppins";
  font-size: 0.9rem;
  font-weight: 600;
  margin: 3vh 0.7vw 2vh 0;
`;

export const Rating = styled.span`
  font-family: "Poppins";
  font-weight: 600;
  color: var(--text-yellow);
  background-color: var(--back-bluesteel);
  padding: 0.5rem;
  font-size: 0.8rem;
  max-height: 1.5rem;
  border-radius: 0.8rem;
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

export const ReleaseDate = styled.span``;
