import * as React from "react";
import {getRatingWithComma, getDescriptionRating} from "../../utils";
import {filmType} from "../../types";

interface Props {
  film: filmType
}

const OverviewInfo: React.FC<Props> = ({film}) => {
  const {
    rating,
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
          <span className="movie-rating__level">{getDescriptionRating(rating)}</span>
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

export default OverviewInfo;
