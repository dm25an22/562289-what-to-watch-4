import React from 'react';
import PropTypes from "prop-types";
import {history} from '../../history.js';

const VideoFullScreen = (props) => {
  const {
    film,
    isPlaying,
    timeProgress,
    positionProgress,
    renderVideo,
    toggleFullscreen,
    onPrgressBarHandler,
    drugTogglerHandler,
    containerRef,
    togglerRef,
    isShowConrollerBar,
    playHandler
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
                <div ref={togglerRef} onMouseDown={drugTogglerHandler} className="player__toggler" style={{left: `${positionProgress}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{timeProgress}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                {isPlaying ?
                  <React.Fragment>
                    <svg onClick={playHandler} viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </React.Fragment>

                  :
                  <React.Fragment>
                    <svg onClick={playHandler} viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause"></use>
                    </svg>
                    <span>Pause</span>
                  </React.Fragment>
                }
              </button>
              <div className="player__name">{film.title}</div>
              <button
                onClick={toggleFullscreen}
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


VideoFullScreen.propTypes = {
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  timeProgress: PropTypes.string.isRequired,
  positionProgress: PropTypes.number.isRequired,
  renderVideo: PropTypes.func.isRequired,
  toggleFullscreen: PropTypes.func.isRequired,
  onPrgressBarHandler: PropTypes.func.isRequired,
  drugTogglerHandler: PropTypes.func.isRequired,
  containerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  togglerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  isShowConrollerBar: PropTypes.bool.isRequired,
  playHandler: PropTypes.func.isRequired,
};

export default VideoFullScreen;
