import React, {createRef} from 'react';
import PropTypes from "prop-types";
import {getTimeForVideoPlayer} from '../../utils';

const KEY_CODE = {
  SPACE: 32
};
const DELAY = 6000;

const Settings = {
  loop: false,
  muted: false,
  width: `100%`,
  height: `100%`
};

const withFullVideoPlayer = (Component) => {
  class WithFullVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: true,
        timeProgress: `0:00`,
        positionProgress: 0,
        duration: 0,
        isShowConrollerBar: true,
        timeoutId: null
      };

      this.videoRef = createRef();
      this.containerRef = createRef();
      this.togglerRef = createRef();

      this.onPlayHandler = this.onPlayHandler.bind(this);
      this.onToggleFullscreenHandler = this.onToggleFullscreenHandler.bind(this);
      this.onPrgressBarHandler = this.onPrgressBarHandler.bind(this);
      this.onDrugTogglerHandler = this.onDrugTogglerHandler.bind(this);
      this._playOnKeydownHandler = this._playOnKeydownHandler.bind(this);
      this._startTimeout = this._startTimeout.bind(this);
      this._resetTimeout = this._resetTimeout.bind(this);
    }

    _startTimeout() {
      const timeout = setTimeout(() => {
        this.setState({
          isShowConrollerBar: false
        });
      }, DELAY);

      this.setState({
        timeoutId: timeout
      });
    }

    _resetTimeout() {
      clearTimeout(this.state.timeoutId);
      this.setState({
        isShowConrollerBar: true
      });
      this._startTimeout();
    }

    _getPositionProgress(time) {
      return (time / this.state.duration) * 100;
    }

    _getTimeProgress(time) {
      return getTimeForVideoPlayer(time);
    }

    _playOnKeydownHandler(evt) {
      if (evt.keyCode === KEY_CODE.SPACE) {
        this.onPlayHandler();
      }
    }

    componentDidMount() {
      const video = this.videoRef.current;

      video.src = this.props.film.videoLink;
      video.poster = this.props.film.bigPoster;

      video.onplay = () => {
        this._startTimeout();
        window.addEventListener(`mousemove`, this._resetTimeout);
      };

      video.onpause = () => {
        window.removeEventListener(`mousemove`, this._resetTimeout);
        clearTimeout(this.state.timeoutId);
        this.setState({
          isShowConrollerBar: true
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          timeProgress: this._getTimeProgress(video.currentTime),
          positionProgress: this._getPositionProgress(video.currentTime)
        });
      };

      video.ondurationchange = () => {
        this.setState({
          duration: video.duration
        });
      };

      window.addEventListener(`keydown`, this._playOnKeydownHandler);
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.ondurationchange = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.poster = ``;
      video.src = ``;
      clearTimeout(this.state.timeoutId);
      window.removeEventListener(`keydown`, this._playOnKeydownHandler);
      window.removeEventListener(`mousemove`, this._resetTimeout);
    }

    onPrgressBarHandler(evt) {
      const clientX = evt.clientX;
      const boundingClientRect = evt.target.getBoundingClientRect();
      const positionInPx = clientX - boundingClientRect.left;
      const positionInPercent = (positionInPx / boundingClientRect.width) * 100;
      const newTime = this.state.duration * positionInPercent / 100;

      this.videoRef.current.currentTime = newTime;
    }

    onDrugTogglerHandler(evt) {
      event.preventDefault();

      const container = this.containerRef.current;
      const toggler = this.togglerRef.current;
      const video = this.videoRef.current;

      const shiftX = evt.clientX - toggler.getBoundingClientRect().left;

      const onMouseMove = (e) => {
        let newLeft = e.clientX - shiftX - container.getBoundingClientRect().left;

        if (newLeft < 0) {
          newLeft = 0;
        }

        let rightEdge = container.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        toggler.style.left = `${newLeft}px`;
        const positionInPercent = (newLeft / container.getBoundingClientRect().width) * 100;
        const newTime = this.state.duration * positionInPercent / 100;
        video.currentTime = newTime;
        this.setState({
          positionProgress: positionInPercent,
          timeProgress: this._getTimeProgress(newTime)
        });
      };

      const onMouseUp = () => {
        window.removeEventListener(`mouseup`, onMouseUp);
        window.removeEventListener(`mousemove`, onMouseMove);
      };

      window.addEventListener(`mousemove`, onMouseMove);
      window.addEventListener(`mouseup`, onMouseUp);
    }

    onPlayHandler() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    onToggleFullscreenHandler() {
      const video = this.videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onPrgressBarHandler={this.onPrgressBarHandler}
          isPlaying={this.state.isPlaying}
          timeProgress={this.state.timeProgress}
          positionProgress={this.state.positionProgress}
          onDrugTogglerHandler={this.onDrugTogglerHandler}
          onToggleFullscreen={this.onToggleFullscreenHandler}
          containerRef={this.containerRef}
          togglerRef={this.togglerRef}
          onPlayHandler={this.onPlayHandler}
          isShowConrollerBar={this.state.isShowConrollerBar}
          renderVideo={() => {
            return (
              <video
                autoPlay={true}
                ref={this.videoRef}
                onClick={this.onPlayHandler}
                className="player__video"
                muted={Settings.muted}
                width={Settings.width}
                height={Settings.height}
              />
            );
          }}
        >

        </Component>
      );
    }

  }

  WithFullVideoPlayer.propTypes = {
    film: PropTypes.shape({
      videoLink: PropTypes.string,
      bigPoster: PropTypes.string
    }).isRequired
  };

  return WithFullVideoPlayer;
};

export default withFullVideoPlayer;
