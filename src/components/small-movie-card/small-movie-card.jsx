import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from '../video-player/video-player.jsx';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      timeoutId: null
    };

    this.startPlayHandler = this.startPlayHandler.bind(this);
    this.stopPlayHandler = this.stopPlayHandler.bind(this);
  }

  startPlayHandler() {
    const timeoutId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);

    this.setState({timeoutId});
  }

  stopPlayHandler() {
    this.setState({isPlaying: false});
    clearTimeout(this.state.timeoutId);
  }

  render() {
    const {film, onSmallCardClick, index} = this.props;
    return (
      <article
        onClick={() => {
          onSmallCardClick(index);
          this.stopPlayHandler();
        }}
        onMouseEnter={this.startPlayHandler}
        onMouseLeave={this.stopPlayHandler}
        className="small-movie-card catalog__movies-card">
        <div
          className="small-movie-card__image">
          <VideoPlayer
            preview={this.props.film.preview}
            poster={film.smallCardImg}
            isPlaying={this.state.isPlaying}
          />
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
  film: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    smallCardImg: PropTypes.string.isRequired
  }).isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default SmallMovieCard;
