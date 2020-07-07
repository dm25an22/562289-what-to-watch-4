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
    const {settings} = this.props;
    return (
      <video
        className={settings.className}
        loop={settings.loop}
        ref={this._videoRef}
        muted={settings.muted}
        width={settings.width}
        height={settings.height}>
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
  settings: PropTypes.object.isRequired,
  preview: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
