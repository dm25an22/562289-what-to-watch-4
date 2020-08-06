import React, {createRef} from 'react';
import PropTypes from "prop-types";

const DELAY = 800;

const Settings = {
  className: `player__video`,
  loop: true,
  width: `280px`,
  height: `175px`,
  autoPlay: true
};

const withSmallVideoPlayer = (Component) => {
  class WithSmallVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        timeoutId: null,
        isPlaying: false
      };

      this.onStartPlayHandler = this.onStartPlayHandler.bind(this);
      this.onStopPlayHandler = this.onStopPlayHandler.bind(this);
    }

    onStartPlayHandler() {
      const video = this._videoRef.current;
      video.src = this.props.film.preview;
      video.muted = true;

      const timeoutId = setTimeout(() => {
        if (!this.state.isPlaying && video.paused) {
          video.play();
          this.setState({isPlaying: true});
        }
      }, DELAY);

      this.setState({timeoutId});
    }

    onStopPlayHandler() {
      const video = this._videoRef.current;

      if (this.state.isPlaying && !video.paused) {
        video.pause();
      }

      this.setState({isPlaying: false});
      video.src = ``;

      clearTimeout(this.state.timeoutId);
    }

    render() {
      return (
        <Component
          {...this.props}
          onStartPlayHandler={this.onStartPlayHandler}
          onStopPlayHandler={this.onStopPlayHandler}
          renderVideoPlayer={() => (
            <video
              poster={this.props.film.smallCardImg}
              height={Settings.height}
              width={Settings.width}
              loop={Settings.loop}
              className={Settings.className}
              ref={this._videoRef}
            />
          )}
        />
      );
    }

  }

  WithSmallVideoPlayer.propTypes = {
    film: PropTypes.shape({
      smallCardImg: PropTypes.string,
      videoLink: PropTypes.string,
      preview: PropTypes.string
    }).isRequired
  };

  return WithSmallVideoPlayer;
};

export default withSmallVideoPlayer;
