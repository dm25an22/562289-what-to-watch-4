import React from "react";
import PropTypes from "prop-types";
import {getDateForComment, getRatingWithComma} from "../../utils";

const Comment = ({data}) => {
  const {
    comment,
    date,
    rating,
    user
  } = data;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{getDateForComment(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{getRatingWithComma(rating)}</div>
    </div>
  );
};

Comment.propTypes = {
  data: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Comment;
