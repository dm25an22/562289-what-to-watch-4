import React from 'react';
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
