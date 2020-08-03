import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import PropTypes from "prop-types";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getPromoFilm} from "../../reducer/data/selectors";
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
import VideoFullScreen from "../video-full-screen/video-full-creen.jsx";
import withFullVideoPlayer from "../../hocks/with-full-video-player/with-full-video-player";

const MovieDetailsWrraped = withCurrentFilm(MovieDetails);
const AddReviewWrraped = withCurrentFilm(withErrorStyle(AddReview));
const VideoFullScreenWrraped = withCurrentFilm(withFullVideoPlayer(VideoFullScreen));
class App extends PureComponent {
  render() {
    const {
      films,
      promoFilm,
      authStatus,
      onSubmitAuth,
      loadFavoriteList,
      onSubmitAddReview,
      userData
    } = this.props;

    if (films === null || promoFilm === null || userData === null) {
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
                authStatus={authStatus}
              />
            )}
          >
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            <MyList />
          </Route>
          <Route exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}/:id`}
            render={(props) => (
              <AddReviewWrraped
                {...props}
                films={films}
                onSubmitAddReview={onSubmitAddReview}
              />
            )}
          />
          <Route exact path={`${AppRoute.PLAYER}/:id`}
            render={(props) => (
              <VideoFullScreenWrraped
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
  loadFavoriteList: PropTypes.func.isRequired,
  onSubmitAddReview: PropTypes.func.isRequired,
  userData: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    films: getFilms(state),
    promoFilm: getPromoFilm(state),
    authStatus: getAuthStatus(state),
    userData: getUserData(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitAuth(authData) {
      dispatch(UserOperation.login(authData));
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
