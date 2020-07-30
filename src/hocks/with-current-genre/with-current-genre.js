import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getUniqueGeners} from '../../reducer/data/selectors';
import {ALL_GENRE} from '../../utils';

const withCurrentGenre = (Component) => {
  class WithCurrentGenre extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentGenre: ALL_GENRE
      };

      this.onGenreClick = this.onGenreClick.bind(this);
    }

    onGenreClick(genre) {
      this.setState({currentGenre: genre});
    }

    render() {
      const {genres} = this.props;

      return (
        <Component
          {...this.props}
          genres={genres}
          currentGenre={this.state.currentGenre}
          onGenreClick={this.onGenreClick}
        />
      );
    }
  }

  WithCurrentGenre.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      genres: getUniqueGeners(state),
    };
  };

  return connect(mapStateToProps)(WithCurrentGenre);
};


export default withCurrentGenre;
