import React from "react";
import PropTypes from "prop-types";

class SmallMovieCard extends React.PureComponent {
  render() {
    const {
      film,
      onSmallCardClick,
      index,
      renderVideoPlayer,
      startPlayHandler,
      stopPlayHandler,
      isPlaing
    } = this.props;

    const {preview, smallCardImg} = film;

    return (
      <article
        onClick={() => {
          onSmallCardClick(index);
          stopPlayHandler();
        }}
        onMouseEnter={startPlayHandler}
        onMouseLeave={stopPlayHandler}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">

          {renderVideoPlayer(preview, smallCardImg, isPlaing)}

        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link"
            onClick={(evt) => {
              evt.preventDefault();
            }}
            href="movie-page.html">{film.title}
          </a>
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
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    smallCardImg: PropTypes.string.isRequired
  }).isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default SmallMovieCard;
