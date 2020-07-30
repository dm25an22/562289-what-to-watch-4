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
      isPlaing
    } = this.props;

    const {preview, smallCardImg, id} = film;

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

          {renderVideoPlayer(preview, smallCardImg, isPlaing)}

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
  isPlaing: PropTypes.bool.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    smallCardImg: PropTypes.string.isRequired,
  }).isRequired,
};

export default SmallMovieCard;
