import * as React from "react";
import {getDateForComment, getRatingWithComma} from "../../utils";
import {commentType} from "../../types";

interface Props {
  data: commentType
}

const Comment: React.FC<Props> = ({data}) => {
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

export default Comment;
