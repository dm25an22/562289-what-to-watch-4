import * as React from 'react';
import {history} from '../../history.js';
import {filmType} from '../../types.js';

interface Props {
  film: filmType,
  isPlaying: boolean,
  timeProgress: string,
  positionProgress: number,
  renderVideo: () => React.ReactNode,
  onToggleFullscreen: () => void,
  onPrgressBarHandler: () => void,
  onDrugTogglerHandler: () => void,
  containerRef: React.RefObject<HTMLDivElement>,
  togglerRef: React.RefObject<HTMLDivElement>,
  isShowConrollerBar: boolean,
  onPlayHandler: () => void,
}

const VideoFullScreen: React.FC<Props> = (props: Props) => {
  const {
    film,
    isPlaying,
    timeProgress,
    positionProgress,
    renderVideo,
    onToggleFullscreen,
    onPrgressBarHandler,
    onDrugTogglerHandler,
    containerRef,
    togglerRef,
    isShowConrollerBar,
    onPlayHandler,
  } = props;

  return (
    <div style={{cursor: `${isShowConrollerBar ? `default` : `none`}`}} className="player">
      {renderVideo()}
      {isShowConrollerBar &&
        <React.Fragment>
          <button onClick={() => {
            history.goBack();
          }} type="button" className="player__exit">Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div ref={containerRef} className="player__time">
                <progress onClick={onPrgressBarHandler} className="player__progress" value={positionProgress} max="100"></progress>
                <div ref={togglerRef} onMouseDown={onDrugTogglerHandler} className="player__toggler" style={{left: `${positionProgress}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{timeProgress}</div>
            </div>

            <div className="player__controls-row">
              <button onClick={onPlayHandler} type="button" className="player__play">
                {isPlaying
                  ?
                  <React.Fragment>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </React.Fragment>
                }
              </button>
              <div className="player__name">{film.title}</div>
              <button
                onClick={onToggleFullscreen}
                type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </React.Fragment>
      }
    </div>
  );
};

export default VideoFullScreen;
