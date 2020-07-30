import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getFilms} from "../../reducer/data/selectors";
import LoadMoreButton from '../../components/load-more-button/load-more-button.jsx';
import {getFilmsByGener} from '../../utils';

const START_SHOW_CARDS = 8;
const SHOW_MORE_STEP = 8;

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showCards: START_SHOW_CARDS,
        films: getFilmsByGener(this.props.films, this.props.genre)
      };

      this.changeCountShowCrads = this.changeCountShowCrads.bind(this);
    }

    _getShowfilms() {
      return this.state.films.slice(0, this.state.showCards);
    }

    changeCountShowCrads() {
      this.setState((prevState) => ({showCards: prevState.showCards + SHOW_MORE_STEP}));
    }

    render() {
      return (
        <Component
          {...this.props}
          filmsByFilter={this._getShowfilms()}
        >

          {this.state.showCards < this.state.films.length && <LoadMoreButton changeCountShowCrads={this.changeCountShowCrads} />}

        </Component>
      );
    }
  }

  WithShowMore.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    genre: PropTypes.string.isRequired
  };

  const mapStateToProps = (state) => {
    return {
      films: getFilms(state),
    };
  };

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
