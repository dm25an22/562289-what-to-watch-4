import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app-state/app-state";
import {getCurrentFilm} from "../../reducer/app-state/selectors";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {getSignIn} from "../../reducer/app-state/selectors";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";

const MovieDetailsWrraped = withCurrentTab(MovieDetails);

class App extends PureComponent {
  _movieDetailsRender() {
    if (this.props.films === null) {
      return null;
    }

    return <MovieDetailsWrraped
      film={this.props.films.find((it) => it.id === this.props.currentFilm)}
    />;
  }

  _renderApp() {
    const {films, currentFilm, onSmallCardClick, promoFilm, authStatus, onSubmitAuth, isSignIn} = this.props;

    if (films === null || promoFilm === null) {
      return null;
    }

    if (isSignIn) {
      return (
        <SignIn onSubmit={onSubmitAuth} />
      );
    }

    if (authStatus === AuthorizationStatus.AUTH && isSignIn) {
      return (
        <Main
          promoFilm={promoFilm}
          onSmallCardClick={onSmallCardClick}
        />
      );
    }

    if (currentFilm >= 0) {
      return (
        <MovieDetailsWrraped
          film={this.props.films.find((it) => it.id === this.props.currentFilm)}
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
          <Route exact path="/dev-sign-in">
            <SignIn
              onSubmit={this.props.onSubmitAuth}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

}

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
  isSignIn: PropTypes.bool.isRequired,
  films: PropTypes.any,
  promoFilm: PropTypes.any,
  currentFilm: PropTypes.number.isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  onSubmitAuth: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isSignIn: getSignIn(state),
    films: getFilms(state),
    currentFilm: getCurrentFilm(state),
    promoFilm: getPromoFilm(state),
    authStatus: getAuthStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSmallCardClick(film, genre) {
      dispatch(ActionCreator.currentFilm(film));
      dispatch(ActionCreator.currentGenre(genre));
    },

    onSubmitAuth(authData) {
      dispatch(UserOperation.login(authData));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
