import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {AppRoute} from "../../consts";
import {history} from "../../history";
import withCurrentFilm from "../../hocks/with-current-film/with-current-film.js";

const MovieDetailsWrraped = withCurrentFilm(MovieDetails);
class App extends PureComponent {
  render() {
    const {films, promoFilm, authStatus, onSubmitAuth, isSignIn} = this.props;

    if (films === null || promoFilm === null) {
      return null;
    }

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}
            render={() => (
              <Main
                promoFilm={promoFilm}
              />
            )}
          >
          </Route>
          <Route exact path={AppRoute.LOGIN}
            render={() => (
              <SignIn
                onSubmit={this.props.onSubmitAuth}
              />
            )}
          >
          </Route>
          <Route exact path="/film/:id"
            render={(props) => (
              <MovieDetailsWrraped
                {...props}
                films={films}
              />
            )}
          >
          </Route>
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
  films: PropTypes.any,
  promoFilm: PropTypes.any,
  onSubmitAuth: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    promoFilm: getPromoFilm(state),
    authStatus: getAuthStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAuth(authData) {
      dispatch(UserOperation.login(authData));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
