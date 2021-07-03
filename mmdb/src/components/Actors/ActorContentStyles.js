import styled from "styled-components";

export const Container = styled.div`
  margin: 40px 0 0 50px;
`;
export const Content = styled.div``;

export const Poster = styled.div``;

export const Image = styled.img`
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  :hover Title {
    visibility: visible;
    opacity: 1;
  }
`;

export const Title = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;

  transition: opacity 0.2s, visibility 0.2s;
`;
