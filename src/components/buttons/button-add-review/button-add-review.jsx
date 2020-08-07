import React from "react";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../enum";

const ButtonAddReview = ({id}) => {
  return (
    <Link to={`${AppRoute.FILM}/${id}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
  );
};

ButtonAddReview.propTypes = {
  id: PropType.number.isRequired
};

export default ButtonAddReview;
