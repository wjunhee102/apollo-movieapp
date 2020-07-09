import React from "react";
import { useParams } from  "react-router-dom";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import styled from "styled-components";

const GET_MOVIE = gql`
  query getById($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) }
  });

  console.log(loading, data);

  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? "Loading..."
            : `${data.movie[0].title} ${data.movie[0].isLiked ? "💖" : "😞"}`}
        </Title>
        <Subtitle>
          {data?.movie[0]?.language} · {data?.movie[0]?.rating}
        </Subtitle>
        <Description>{data?.movie[0]?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie[0]?.medium_cover_image}></Poster>
    </Container>
  )
};