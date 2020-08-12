import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../enum";
import {history} from "../../history";
import {filmType} from "../../types";

interface Props {
  renderVideoPlayer: () => React.ReactNode,
  onStartPlayHandler: () => void,
  onStopPlayHandler: () => void,
  film: filmType
}

const SmallMovieCard: React.FC<Props> = (props: Props) => {
  const {
    film,
    renderVideoPlayer,
    onStartPlayHandler,
    onStopPlayHandler,
  } = props;

  const {id} = film;

  return (
    <article
      onClick={() => {
        history.push(`${AppRoute.FILM}/${id}`);
        onStopPlayHandler();
      }}
      onMouseEnter={onStartPlayHandler}
      onMouseLeave={onStopPlayHandler}
      className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        {renderVideoPlayer()}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`${AppRoute.FILM}/${id}`}
          className="small-movie-card__link"
          onClick={() => {
            onStopPlayHandler();
          }}
        >{film.title}
        </Link>
      </h3>
    </article>
  );
};

export default SmallMovieCard;
