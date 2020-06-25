import React, {createRef} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {preview, poster} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.poster = poster;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.poster = null;
    video.src = ``;
  }

  render() {
    return (
      <video
        className="player__video"
        loop={true}
        ref={this._videoRef}
        muted={true}
        width="280px"
        height="175">
      </video>
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.src = this.props.preview;
      video.play();
    } else {
      video.src = ``;
    }
  }
}

VideoPlayer.propTypes = {
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
