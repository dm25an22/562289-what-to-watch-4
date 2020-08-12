import * as React from 'react';
import LoadMoreButton from '../../components/load-more-button/load-more-button';
import {getFilmsByGener} from '../../utils';
import {Subtract} from 'utility-types';
import {filmType} from '../../types';

const START_SHOW_CARDS = 8;
const SHOW_MORE_STEP = 8;

interface State {
  showCards: number,
  films: filmType[]
  showMoreBtn: boolean
}

interface InjectingProps {
  filmsByFilter: filmType[],
  children: React.ReactNode
}

const withShowMore = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithShowMore extends React.PureComponent<T, State> {
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

  return WithShowMore;
};

export default withShowMore;
