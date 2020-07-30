import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../consts";

const ButtonAddReview = ({id}) => {
  return (
    <Link to={`${AppRoute.ADD_REVIEW}/${id}`} className="btn movie-card__button">Add review</Link>
  );
};

export default ButtonAddReview;
