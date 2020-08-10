import React from 'react';
import PropTypes from "prop-types";
import LoadMoreButton from '../../components/load-more-button/load-more-button';
import {getFilmsByGener} from '../../utils';

const START_SHOW_CARDS = 8;
const SHOW_MORE_STEP = 8;

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showCards: START_SHOW_CARDS,
        films: getFilmsByGener(this.props.films, this.props.genre),
        showMoreBtn: false
      };

      this.onChangeCountShowCrads = this.onChangeCountShowCrads.bind(this);
    }

    _getShowfilms() {
      return this.state.films.slice(0, this.state.showCards);
    }

    _checkShouldRenderShowMoreBtn() {
      this.setState({
        showMoreBtn: this.state.showCards < this.state.films.length
      });
    }

    componentDidMount() {
      this._checkShouldRenderShowMoreBtn();
    }

    componentDidUpdate() {
      this._checkShouldRenderShowMoreBtn();
    }

    onChangeCountShowCrads() {
      this.setState((prevState) => ({showCards: prevState.showCards + SHOW_MORE_STEP}));
    }

    render() {
      return (
        <Component
          {...this.props}
          filmsByFilter={this._getShowfilms()}
        >
          {this.state.showMoreBtn && <LoadMoreButton onChangeCountShowCrads={this.onChangeCountShowCrads} />}
        </Component>
      );
    }
  }

  WithShowMore.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    genre: PropTypes.string.isRequired
  };

  return WithShowMore;
};

export default withShowMore;
