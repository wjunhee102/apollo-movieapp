import React from "react";
import { useParams } from  "react-router-dom";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getById($id: Int) {
    movie(id: 19019) {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { id } = useParams();

  const { data } = useQuery(GET_MOVIE);
  console.log(id);

  return (
    <div>
      {data?.title}
    </div>
  )
};