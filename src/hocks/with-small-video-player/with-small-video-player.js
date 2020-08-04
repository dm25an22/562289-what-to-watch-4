import React, {createRef} from 'react';
import PropTypes from "prop-types";

const Settings = {
  className: `player__video`,
  loop: true,
  muted: true,
  width: `280px`,
  height: `175px`
};

const delay = 1000;

const withSmallVideoPlayer = (Component) => {
  class WithSmallVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        timeoutId: null
      };

      this.startPlayHandler = this.startPlayHandler.bind(this);
      this.stopPlayHandler = this.stopPlayHandler.bind(this);
    }

    componentDidMount() {
      const {preview, smallCardImg} = this.props.film;
      const video = this._videoRef.current;

      video.src = preview;
      video.poster = smallCardImg;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.src = this.props.film.preview;
        video.play();
      } else {
        video.src = ``;
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.poster = null;
      video.src = ``;
    }

    _changeIsPlaingState(bool) {
      this.setState({isPlaying: bool});
    }

    startPlayHandler() {
      const timeoutId = setTimeout(() => {
        this._changeIsPlaingState(true);
      }, delay);

      this.setState({timeoutId});
    }


    stopPlayHandler() {
      this._changeIsPlaingState(false);
      clearTimeout(this.state.timeoutId);
    }

    render() {
      return (
        <Component
          {...this.props}
          startPlayHandler={this.startPlayHandler}
          stopPlayHandler={this.stopPlayHandler}
          isPlaing={this.state.isPlaying}
          renderVideoPlayer={() => (
            <video
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
      preview: PropTypes.string
    }).isRequired
  };

  return WithSmallVideoPlayer;
};

export default withSmallVideoPlayer;
