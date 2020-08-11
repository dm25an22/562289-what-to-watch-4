import * as React from 'react';
import {Subtract} from 'utility-types';

const DELAY = 800;

const Settings = {
  className: `player__video`,
  loop: true,
  width: `280px`,
  height: `175px`,
  autoPlay: true
};

interface State {
  timeoutId: any,
  isPlaying: boolean
}

interface InjectingProps {
  onStartPlayHandler: () => void,
  onStopPlayHandler: () => void,
  renderVideoPlayer: () => React.ReactNode
}

const withSmallVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSmallVideoPlayer extends React.PureComponent<T, State> {
    private videoRef: React.RefObject<HTMLVideoElement>

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        timeoutId: null,
        isPlaying: false
      };

      this.onStartPlayHandler = this.onStartPlayHandler.bind(this);
      this.onStopPlayHandler = this.onStopPlayHandler.bind(this);
    }

    onStartPlayHandler() {
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;

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
              ref={this.videoRef}
            />
          )}
        />
      );
    }

  }

  return WithSmallVideoPlayer;
};

export default withSmallVideoPlayer;
