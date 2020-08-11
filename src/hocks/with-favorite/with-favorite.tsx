import * as React from "react";
import {Subtract} from "utility-types";

interface InjectingProps {
  status: number,
}

const withFavorite = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithFavorite extends React.PureComponent<T> {
    _checkFilmInFavorite() {
      const {favoriteList, film} = this.props;
      const isFavorite = Boolean(favoriteList.find((it) => it.id === film.id));
      return isFavorite ? 0 : 1;
    }

    render() {
      return (
        <Component
          {...this.props}
          status={this._checkFilmInFavorite()}
        />
      );
    }
  }

  return WithFavorite;
};

export default withFavorite;
