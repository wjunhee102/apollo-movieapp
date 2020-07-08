import React from "react";
import { Link } from "react-router-dom";

export default ({id, img, title}) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        {id}
        <img src={img} alt={title} title={title} />
      </Link>
    </div>
  )
}