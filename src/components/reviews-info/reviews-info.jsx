import React from "react";
import PropTypes from "prop-types";
import Comment from "../comment/comment.jsx";

const ReviewsInfo = () => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default ReviewsInfo;
