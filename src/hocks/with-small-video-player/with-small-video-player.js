import React, {createRef} from 'react';
import PropTypes from "prop-types";

const Settings = {
  className: `player__video`,
  loop: true,
  muted: true,
  width: `280px`,
  height: `175px`,
  autoPlay: true
};

const delay = 600;

const withSmallVideoPlayer = (Component) => {
  class WithSmallVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        timeoutId: null
      };

      this.startPlayHandler = this.startPlayHandler.bind(this);
      this.stopPlayHandler = this.stopPlayHandler.bind(this);
    }

    _changeIsPlaingState(bool) {
      this.setState({isPlaying: bool});
    }

    startPlayHandler() {
      const timeoutId = setTimeout(() => {
        this._videoRef.current.src = this.props.film.preview;
        this._videoRef.current.play();
      }, delay);

      this.setState({timeoutId});
    }


    stopPlayHandler() {
      this._videoRef.current.pause();
      this._videoRef.current.src = ``;
      clearTimeout(this.state.timeoutId);
    }

    render() {
      return (
        <Component
          {...this.props}
          startPlayHandler={this.startPlayHandler}
          stopPlayHandler={this.stopPlayHandler}
          renderVideoPlayer={() => (
            <video
              poster={this.props.film.smallCardImg}
              height={Settings.height}
              width={Settings.width}
              muted={Settings.muted}
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
      videoLink: PropTypes.string
    }).isRequired
  };

  return WithSmallVideoPlayer;
};

export default withSmallVideoPlayer;
