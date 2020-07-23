import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getCurrentGenre} from '../../reducer/app-state/selectors';
import {ActionCreator} from '../../reducer/app-state/app-state';
import {getUniqueGeners} from '../../reducer/data/selectors';


const withCurrentGenre = (Component) => {
  class WithCurrentGenre extends React.PureComponent {

    render() {
      const {currentGenre, onGenreClick, genres} = this.props;

      return (
        <Component
          {...this.props}
          genres={genres}
          currentGenre={currentGenre}
          onGenreClick={onGenreClick}
        />
      );
    }
  }

  WithCurrentGenre.propTypes = {
    currentGenre: PropTypes.string.isRequired,
    onGenreClick: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      genres: getUniqueGeners(state),
      currentGenre: getCurrentGenre(state),
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      onGenreClick(genre) {
        dispatch(ActionCreator.currentGenre(genre));
      },
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithCurrentGenre);
};


export default withCurrentGenre;
