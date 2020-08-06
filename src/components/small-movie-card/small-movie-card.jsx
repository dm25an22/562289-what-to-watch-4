import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../constans";
import {history} from "../../history";
class SmallMovieCard extends React.PureComponent {
  render() {
    const {
      film,
      renderVideoPlayer,
      onStartPlayHandler,
      onStopPlayHandler,
    } = this.props;

    const {id} = film;

    return (
      <article
        onClick={() => {
          history.push(`${APP_ROUTE.FILM}/${id}`);
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
            to={`${APP_ROUTE.FILM}/${id}`}
            className="small-movie-card__link"
            onClick={() => {
              onStopPlayHandler();
            }}
          >{film.title}
          </Link>
        </h3>
      </article>
    );
  }

}

SmallMovieCard.propTypes = {
  renderVideoPlayer: PropTypes.func.isRequired,
  onStartPlayHandler: PropTypes.func.isRequired,
  onStopPlayHandler: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    smallCardImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
