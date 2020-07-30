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
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute} from "../../consts";
import {history} from "../../history";
import withCurrentFilm from "../../hocks/with-current-film/with-current-film.js";
import MyList from "../my-list/my-list.jsx";
import AddReview from '../add-review/add-review.jsx';

const MovieDetailsWrraped = withCurrentFilm(MovieDetails);
const AddReviewWrraped = withCurrentFilm(AddReview);
class App extends PureComponent {
  render() {
    const {films, promoFilm, authStatus, onSubmitAuth, loadFavoriteList} = this.props;

    if (films === null || promoFilm === null) {
      return null;
    }

    if (authStatus === AuthorizationStatus.AUTH) {
      loadFavoriteList();
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
                onSubmit={onSubmitAuth}
                authStatus={authStatus}
              />
            )}
          >
          </Route>
          <Route exact path={`${AppRoute.FILM}/:id`}
            render={(props) => (
              <MovieDetailsWrraped
                {...props}
                films={films}
              />
            )}
          >
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            <MyList />
          </Route>
          <Route exact path={`${AppRoute.ADD_REVIEW}/:id`}
            render={(props) => (
              <AddReviewWrraped
                {...props}
                films={films}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }

}

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
  films: PropTypes.any,
  promoFilm: PropTypes.any,
  onSubmitAuth: PropTypes.func.isRequired,
  loadFavoriteList: PropTypes.func.isRequired
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
    },

    loadFavoriteList() {
      dispatch(DataOperation.loadFavorites());
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
