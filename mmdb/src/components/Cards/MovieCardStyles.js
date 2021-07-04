import styled from "styled-components";

export const Container = styled.div`
  background-color: #3b5058;
  justify-content: center;
  display: flex;
  margin: 3% 5% 0 5%;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 20%;
  height: auto;
`;

export const CardContent = styled.div``;

export const ImageDiv = styled.div``;

export const Poster = styled.img`
  border-radius: 10px 10px 0px 0px;
`;

export const BottomPortion = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: #c3d8c8;
  font-family: "Montserrat";
  letter-spacing: 1px;
  font-weight: 700;
  margin-right: 3%;
  font-size: 20px;
`;

export const Ratings = styled.div``;

export const Rating = styled.span`
  color: #2f3b3e;
  font-family: "Montserrat";
  background-color: #c3d8c8;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 18px;
  padding: 5px;
  border-radius: 10px;
`;
