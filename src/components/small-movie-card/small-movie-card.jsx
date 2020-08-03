import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import {history} from "../../history";
class SmallMovieCard extends React.PureComponent {
  render() {
    const {
      film,
      renderVideoPlayer,
      startPlayHandler,
      stopPlayHandler,
    } = this.props;

    const {id} = film;

    return (
      <article
        onClick={() => {
          history.push(`${AppRoute.FILM}/${id}`);
          stopPlayHandler();
        }}
        onMouseEnter={startPlayHandler}
        onMouseLeave={stopPlayHandler}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">

          {renderVideoPlayer()}

        </div>
        <h3 className="small-movie-card__title">
          <Link
            to={`${AppRoute.FILM}/${id}`}
            className="small-movie-card__link"
            onClick={() => {
              stopPlayHandler();
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
  startPlayHandler: PropTypes.func.isRequired,
  stopPlayHandler: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
