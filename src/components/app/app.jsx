import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getPromoFilm, getUniqueGeners} from "../../reducer/data/selectors";
import {getAuthStatus, getUserData} from "../../reducer/user/selectors";
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute} from "../../consts";
import {history} from "../../history";
import withCurrentFilm from "../../hocks/with-current-film/with-current-film.js";
import MyList from "../my-list/my-list.jsx";
import AddReview from '../add-review/add-review.jsx';
import withErrorStyle from "../../hocks/with-error-style/with-error-style";
import VideoFullScreen from "../video-full-screen/video-full-screen.jsx";
import withFullVideoPlayer from "../../hocks/with-full-video-player/with-full-video-player";
import withValidateSignIn from '../../hocks/with-validate-sign-in/with-validate-sign-in';
import PrivateRoute from "../private-route/private-route.jsx";
import PageWarring from "../page-warring/page-warring.jsx";
import NotFoundMessage from "../page-not-found/page-not-found.jsx";

const MovieDetailsWrraped = withCurrentFilm(MovieDetails);
const AddReviewWrraped = withCurrentFilm(withErrorStyle(AddReview));
const VideoFullScreenWrraped = withCurrentFilm(withFullVideoPlayer(VideoFullScreen));
const SignInWrraped = withValidateSignIn(SignIn);
class App extends PureComponent {
  render() {
    const {
      films,
      promoFilm,
      authStatus,
      onSubmitAuth,
      loadFavoriteList,
      onSubmitAddReview,
      genres
    } = this.props;

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
                films={films}
                genres={genres}
              />
            )}
          >
          </Route>
          <Route exact path={AppRoute.LOGIN}
            render={() => (
              <SignInWrraped
                onSubmit={onSubmitAuth}
              />
            )}
          >
          </Route>
          <Route exact path={`${AppRoute.FILM}/:id`}
            render={(props) => (
              <MovieDetailsWrraped
                {...props}
                films={films}
                authStatus={authStatus}
              />
            )}
          >
          </Route>
          <PrivateRoute
            exact
            path={AppRoute.MY_LIST}
            render={(props) => {
              return (
                <MyList {...props} />
              );
            }}
          />
          <PrivateRoute
            exact
            path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}`}
            render={(props) => {
              return (
                <AddReviewWrraped
                  {...props}
                  films={films}
                  onSubmitAddReview={onSubmitAddReview}
                />
              );
            }}
          />
          <Route exact path={`${AppRoute.PLAYER}/:id`}
            render={(props) => (
              <VideoFullScreenWrraped
                {...props}
                films={films}
              />
            )}
          />
          <Route
            render={() => {
              return (
                <PageWarring>
                  <NotFoundMessage />
                </PageWarring>
              );
            }}
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
  loadFavoriteList: PropTypes.func.isRequired,
  onSubmitAddReview: PropTypes.func.isRequired,
  userData: PropTypes.any,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    promoFilm: getPromoFilm(state),
    authStatus: getAuthStatus(state),
    userData: getUserData(state),
    genres: getUniqueGeners(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAuth(authData, onSuccess, onError) {
      dispatch(UserOperation.login(authData, onSuccess, onError));
    },

    loadFavoriteList() {
      dispatch(DataOperation.loadFavorites());
    },

    onSubmitAddReview(filmId, newComment, onSuccess, onError) {
      dispatch(DataOperation.addNewComment(filmId, newComment, onSuccess, onError));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
