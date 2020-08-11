import * as React from 'react';
import {ALL_GENRE} from '../../constans';
import {Subtract} from 'utility-types';

interface State {
  currentGenre: string
}

interface InjectingProps {
  currentGenre: string,
  onGenreClick: () => void
}

const withCurrentGenre = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithCurrentGenre extends React.PureComponent<T, State> {
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
      return (
        <Component
          {...this.props}
          currentGenre={this.state.currentGenre}
          onGenreClick={this.onGenreClick}
        />
      );
    }
  }

  return WithCurrentGenre;
};


export default withCurrentGenre;
