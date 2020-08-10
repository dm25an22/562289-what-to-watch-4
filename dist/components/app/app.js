"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const React = require("react");
const main_jsx_1 = require("../main/main.jsx");
const movie_details_jsx_1 = require("../movie-details/movie-details.jsx");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../reducer/data/selectors");
const selectors_2 = require("../../reducer/user/selectors");
const sign_in_jsx_1 = require("../sign-in/sign-in.jsx");
const user_1 = require("../../reducer/user/user");
const data_1 = require("../../reducer/data/data");
const enum_1 = require("../../enum");
const history_1 = require("../../history");
const with_current_film_js_1 = require("../../hocks/with-current-film/with-current-film.js");
const my_list_jsx_1 = require("../my-list/my-list.jsx");
const add_review_jsx_1 = require("../add-review/add-review.jsx");
const with_error_style_1 = require("../../hocks/with-error-style/with-error-style");
const video_full_screen_jsx_1 = require("../video-full-screen/video-full-screen.jsx");
const with_full_video_player_1 = require("../../hocks/with-full-video-player/with-full-video-player");
const with_validate_sign_in_1 = require("../../hocks/with-validate-sign-in/with-validate-sign-in");
const private_route_jsx_1 = require("../private-route/private-route.jsx");
const page_warring_jsx_1 = require("../page-warring/page-warring.jsx");
const page_not_found_jsx_1 = require("../page-not-found/page-not-found.jsx");
const MovieDetailsWrraped = with_current_film_js_1.default(movie_details_jsx_1.default);
const AddReviewWrraped = with_current_film_js_1.default(with_error_style_1.default(add_review_jsx_1.default));
const VideoFullScreenWrraped = with_current_film_js_1.default(with_full_video_player_1.default(video_full_screen_jsx_1.default));
const SignInWrraped = with_validate_sign_in_1.default(sign_in_jsx_1.default);
const App = (props) => {
    const { films, promoFilm, authStatus, onSubmitAuth, onSubmitAddReview, genres } = props;
    return (React.createElement(react_router_dom_1.Router, { history: history_1.history },
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: enum_1.AppRoute.ROOT, render: () => (React.createElement(main_jsx_1.default, { promoFilm: promoFilm, films: films, genres: genres })) }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: enum_1.AppRoute.LOGIN, render: () => (React.createElement(SignInWrraped, { authStatus: authStatus, onSubmit: onSubmitAuth })) }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: `${enum_1.AppRoute.FILM}/:id`, render: (propsComponent) => (React.createElement(MovieDetailsWrraped, Object.assign({}, propsComponent, { films: films, authStatus: authStatus }))) }),
            React.createElement(private_route_jsx_1.default, { exact: true, path: enum_1.AppRoute.MY_LIST, render: () => {
                    return (React.createElement(my_list_jsx_1.default, null));
                } }),
            React.createElement(private_route_jsx_1.default, { exact: true, path: `${enum_1.AppRoute.FILM}/:id${enum_1.AppRoute.ADD_REVIEW}`, render: (propsComponent) => {
                    return (React.createElement(AddReviewWrraped, Object.assign({}, propsComponent, { films: films, onSubmitAddReview: onSubmitAddReview })));
                } }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: `${enum_1.AppRoute.PLAYER}/:id`, render: (propsComponent) => (React.createElement(VideoFullScreenWrraped, Object.assign({}, propsComponent, { films: films }))) }),
            React.createElement(react_router_dom_1.Route, { render: () => {
                    return (React.createElement(page_warring_jsx_1.default, null,
                        React.createElement(page_not_found_jsx_1.default, null)));
                } }))));
};
exports.App = App;
// App.propTypes = {
//   authStatus: PropTypes.string.isRequired,
//   films: PropTypes.any,
//   promoFilm: PropTypes.any,
//   onSubmitAuth: PropTypes.func.isRequired,
//   onSubmitAddReview: PropTypes.func.isRequired,
//   userData: PropTypes.any,
//   genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
// };
const mapStateToProps = (state) => {
    return {
        films: selectors_1.getFilms(state),
        promoFilm: selectors_1.getPromoFilm(state),
        authStatus: selectors_2.getAuthStatus(state),
        userData: selectors_2.getUserData(state),
        genres: selectors_1.getUniqueGeners(state),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitAuth(authData, onSuccess, onError) {
            dispatch(user_1.Operation.login(authData, onSuccess, onError));
        },
        onSubmitAddReview(filmId, newComment, onSuccess, onError) {
            dispatch(data_1.Operation.addNewComment(filmId, newComment, onSuccess, onError));
        }
    };
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map