import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getFilmsByFilter} from "../../reducer/data/selectors";
import LoadMoreButton from '../../components/load-more-button/load-more-button.jsx';

const START_SHOW_CARDS = 8;
const SHOW_MORE_STEP = 8;


const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);


      this.state = {
        showCards: START_SHOW_CARDS,
      };

      this.changeCountShowCrads = this.changeCountShowCrads.bind(this);
    }

    changeCountShowCrads() {
      this.setState((prevState) => ({showCards: prevState.showCards + SHOW_MORE_STEP}));
    }

    _getShowfilms() {
      return this.props.filmsByFilter.slice(0, this.state.showCards);
    }

    render() {
      return (
        <Component
          {...this.props}
          filmsByFilter={this._getShowfilms()}
        >

          {this.state.showCards < this.props.filmsByFilter.length && <LoadMoreButton changeCountShowCrads={this.changeCountShowCrads} />}

        </Component>
      );
    }
  }

  WithShowMore.propTypes = {
    filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      filmsByFilter: getFilmsByFilter(state),
    };
  };

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
