import * as React from "react";
import {Subtract} from "utility-types";
import {filmType} from "../../types";

interface InjectingProps {
  film: filmType
}

const withCurrentFilm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithCurrentFilm extends React.PureComponent<T> {

    _getCurrentFilm(films, id) {
      return films.find((film) => film.id === Number(id));
    }

    render() {
      const {films, match} = this.props;
      const id = match.params.id;
      return (
        <Component
          {...this.props}
          film={this._getCurrentFilm(films, id)}
        />
      );
    }
  }

  return WithCurrentFilm;
};

export default withCurrentFilm;
