import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state";
import {getCurrentFilm} from "../../reducer/app-state/selectors";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";

const MovieDetailsWrraped = withCurrentTab(MovieDetails);
class App extends PureComponent {
  _movieDetailsRender() {
    if (this.props.films === null) {
      return null;
    }

    return <MovieDetailsWrraped
      film={this.props.films[0]}
    />;
  }

  _renderApp() {
    const {films, currentFilm, onSmallCardClick, promoFilm} = this.props;

    if (films === null || promoFilm === null) {
      return null;
    }

    if (currentFilm >= 0) {
      return (
        <MovieDetailsWrraped
          film={films[currentFilm]}
          onSmallCardClick={onSmallCardClick}
        />);
    } else {
      return (
        <Main
          promoFilm={promoFilm}
          onSmallCardClick={onSmallCardClick}
        />
      );
    }

  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-page">
            {this._movieDetailsRender()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  films: PropTypes.any,
  promoFilm: PropTypes.any,
  currentFilm: PropTypes.number.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    currentFilm: getCurrentFilm(state),
    promoFilm: getPromoFilm(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSmallCardClick(film, genre) {
      dispatch(ActionCreator.currentFilm(film));
      dispatch(ActionCreator.currentGenre(genre));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
