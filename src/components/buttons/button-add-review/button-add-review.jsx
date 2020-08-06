import React from "react";
import PropType from "prop-types";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../../constans";

const ButtonAddReview = ({id}) => {
  return (
    <Link to={`${APP_ROUTE.FILM}/${id}${APP_ROUTE.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
  );
};

ButtonAddReview.propTypes = {
  id: PropType.number.isRequired
};

export default ButtonAddReview;
