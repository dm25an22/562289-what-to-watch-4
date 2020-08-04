import React from "react";
import PropTypes from "prop-types";

const withCurrentFilm = (Component) => {
  class WithCurrentFilm extends React.PureComponent {

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

  WithCurrentFilm.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.object.isRequired
  };

  return WithCurrentFilm;
};

export default withCurrentFilm;
