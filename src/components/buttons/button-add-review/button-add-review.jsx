import React from "react";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../consts";

const ButtonAddReview = ({id}) => {
  return (
    <Link to={`${AppRoute.ADD_REVIEW}/${id}`} className="btn movie-card__button">Add review</Link>
  );
};

ButtonAddReview.propTypes = {
  id: PropType.number.isRequired
};

export default ButtonAddReview;
