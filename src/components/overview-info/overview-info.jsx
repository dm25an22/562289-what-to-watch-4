import React from "react";
import PropTypes from "prop-types";
import {getRatingWithComma} from "../../utils";

const OverviewInfo = ({film}) => {
  const {
    rating,
    descriptionRating,
    quantityVotes,
    producer,
    description,
    listActors
  } = film;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{getRatingWithComma(rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{descriptionRating}</span>
          <span className="movie-rating__count">{quantityVotes}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {producer}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {listActors.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

OverviewInfo.propTypes = {
  film: PropTypes.shape({
    producer: PropTypes.string.isRequired,
    listActors: PropTypes.array.isRequired,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    description: PropTypes.string.isRequired,
    descriptionRating: PropTypes.string.isRequired,
    quantityVotes: PropTypes.number.isRequired
  }).isRequired
};

export default OverviewInfo;
