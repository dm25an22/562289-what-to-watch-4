import * as React from "react";
import Main from "../main/main";
import MovieDetails from "../movie-details/movie-details";
import {Route, Switch, Router} from "react-router-dom";
import {connect} from "react-redux";
import {getFilms, getPromoFilm, getUniqueGeners} from "../../reducer/data/selectors";
import {getAuthStatus, getUserData} from "../../reducer/user/selectors";
import SignIn from "../sign-in/sign-in";
import {Operation as UserOperation} from "../../reducer/user/user";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute} from "../../enum";
import {history} from "../../history";
import withCurrentFilm from "../../hocks/with-current-film/with-current-film";
import MyList from "../my-list/my-list";
import AddReview from '../add-review/add-review';
import withErrorStyle from "../../hocks/with-error-style/with-error-style";
import VideoFullScreen from "../video-full-screen/video-full-screen";
import withFullVideoPlayer from "../../hocks/with-full-video-player/with-full-video-player";
import withValidateSignIn from '../../hocks/with-validate-sign-in/with-validate-sign-in';
import PrivateRoute from "../private-route/private-route";
import PageWarring from "../page-warring/page-warring";
import NotFoundMessage from "../page-not-found/page-not-found";
import {filmType, userDataType} from "../../types";

const MovieDetailsWrraped = withCurrentFilm(MovieDetails);
const AddReviewWrraped = withCurrentFilm(withErrorStyle(AddReview));
const VideoFullScreenWrraped = withCurrentFilm(withFullVideoPlayer(VideoFullScreen));
const SignInWrraped = withValidateSignIn(SignIn);

interface Props {
  films: filmType[],
  promoFilm: filmType,
  authStatus: string,
  onSubmitAuth: () => void,
  onSubmitAddReview: () => void,
  genres: string[],
  userData: userDataType,
}

const App: React.FC<Props> = (props: Props) => {
  const {
    films,
    promoFilm,
    authStatus,
    onSubmitAuth,
    onSubmitAddReview,
    genres
  } = props;

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
              authStatus={authStatus}
              onSubmit={onSubmitAuth}
            />
          )}
        >
        </Route>
        <Route exact path={`${AppRoute.FILM}/:id`}
          render={(propsComponent) => (
            <MovieDetailsWrraped
              {...propsComponent}
              films={films}
              authStatus={authStatus}
            />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList />
            );
          }}
        />
        <PrivateRoute
          exact
          path={`${AppRoute.FILM}/:id${AppRoute.ADD_REVIEW}`}
          render={(propsComponent) => {
            return (
              <AddReviewWrraped
                {...propsComponent}
                films={films}
                onSubmitAddReview={onSubmitAddReview}
              />
            );
          }}
        />
        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={(propsComponent) => (
            <VideoFullScreenWrraped
              {...propsComponent}
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
    onSubmitAuth(authData: string, onSuccess, onError) {
      dispatch(UserOperation.login(authData, onSuccess, onError));
    },

    onSubmitAddReview(filmId, newComment, onSuccess, onError) {
      dispatch(DataOperation.addNewComment(filmId, newComment, onSuccess, onError));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
