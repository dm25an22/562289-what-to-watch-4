import React, {createRef} from 'react';
import PropTypes from "prop-types";

const KEY_NAME = {
  SPACE: `Space`
};

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
        isPlaying: false,
        timeProgress: `0:00`,
        positionProgress: 0,
        duration: null,
        isShowConrollerBar: true,
        timeoutId: null
      };

      this.videoRef = createRef();
      this.containerRef = createRef();
      this.togglerRef = createRef();

      this.playHandler = this.playHandler.bind(this);
      this.toggleFullscreenHandler = this.toggleFullscreenHandler.bind(this);
      this.onPrgressBarHandler = this.onPrgressBarHandler.bind(this);
      this.drugTogglerHandler = this.drugTogglerHandler.bind(this);
      this._playOnKeydownHandler = this._playOnKeydownHandler.bind(this);
      this._startTimeout = this._startTimeout.bind(this);
      this._resetTimeout = this._resetTimeout.bind(this);
    }

    _startTimeout() {
      const timeout = setTimeout(() => {
        this.setState({
          isShowConrollerBar: false
        });
      }, 6000);

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
      const timeFloor = Math.floor(time);
      const hours = Math.floor(timeFloor / 60 / 60);
      const minutes = Math.floor(timeFloor / 60) - (hours * 60);
      const seconds = timeFloor % 60;
      const castomTime = `${hours > 0 ? `${hours}:` : ``}${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

      return castomTime;
    }

    _playOnKeydownHandler(evt) {
      if (evt.code === KEY_NAME.SPACE) {
        this.playHandler();
      }
    }

    componentDidMount() {
      const video = this.videoRef.current;

      video.src = this.props.film.videoLink;
      video.poster = this.props.film.bigPoster;

      video.oncanplaythrough = () => {
        this.playHandler();
      };

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
      const positionInPx = clientX - boundingClientRect.x;
      const positionInPercent = (positionInPx / boundingClientRect.width) * 100;
      const newTime = this.state.duration * positionInPercent / 100;

      this.videoRef.current.currentTime = newTime;
    }

    drugTogglerHandler(evt) {
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

    playHandler() {
      this.setState((prevState) => ({
        isPlaying: !prevState.isPlaying
      }));
    }

    toggleFullscreenHandler() {
      this.videoRef.current.requestFullscreen();
    }

    render() {
      return (
        <Component
          {...this.props}
          onPrgressBarHandler={this.onPrgressBarHandler}
          isPlaying={this.state.isPlaying}
          timeProgress={this.state.timeProgress}
          positionProgress={this.state.positionProgress}
          drugTogglerHandler={this.drugTogglerHandler}
          toggleFullscreen={this.toggleFullscreenHandler}
          containerRef={this.containerRef}
          togglerRef={this.togglerRef}
          playHandler={this.playHandler}
          isShowConrollerBar={this.state.isShowConrollerBar}
          renderVideo={() => {
            return (
              <video
                ref={this.videoRef}
                onClick={this.playHandler}
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
