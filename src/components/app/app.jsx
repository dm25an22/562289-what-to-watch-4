import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-page">
            <MovieDetails
              film={this.props.films[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promo, films, currentGenre, onGenreClick, currentFilm, onSmallCardClick} = this.props;

    if (currentFilm >= 0) {
      return (
        <MovieDetails
          film={films[currentFilm]}
        />);
    } else {
      return (
        <Main
          currentGenre={currentGenre}
          promo={promo}
          films={films}
          onGenreClick={onGenreClick}
          onSmallCardClick={onSmallCardClick}
        />
      );
    }

  }

}

App.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  promo: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  currentFilm: PropTypes.number.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    promo: state.promo,
    films: state.films,
    currentGenre: state.currentGenre,
    currentFilm: state.currentFilm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    onGenreClick(genre) {
      dispatch(ActionCreator.currentGenre(genre));
    },

    onSmallCardClick(film) {
      dispatch(ActionCreator.currentFilm(film));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
