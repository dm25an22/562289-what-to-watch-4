import React from 'react';
import VideoPlayer from "../../components/video-player/video-player.jsx";

const settings = {
  className: `player__video`,
  loop: true,
  muted: true,
  width: `280px`,
  height: `175px`
};

const delay = 1000;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        timeoutId: null
      };

      this.startPlayHandler = this.startPlayHandler.bind(this);
      this.stopPlayHandler = this.stopPlayHandler.bind(this);
      this.renderVideoPlayer = this.renderVideoPlayer.bind(this);
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

    renderVideoPlayer(preview, smallCardImg, isPlaing) {
      return (
        <VideoPlayer
          src={preview}
          poster={smallCardImg}
          isPlaying={isPlaing}
          settings={settings}
        />
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          renderVideoPlayer={this.renderVideoPlayer}
          startPlayHandler={this.startPlayHandler}
          stopPlayHandler={this.stopPlayHandler}
          isPlaing={this.state.isPlaying}
        />
      );
    }

  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
