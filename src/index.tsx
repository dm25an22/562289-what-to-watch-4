import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Operation as DataOperation} from "./reducer/data/data";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import PageWarring from "./components/page-warring/page-warring";
import ErrorMessage from "./components/error-message/error-message";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

new Promise((resolve) => {
  resolve(store.dispatch(UserOperation.checkAuth()));
})
  .finally(() => {
    Promise.all([
      store.dispatch(DataOperation.loadFilm()),
      store.dispatch(DataOperation.loadPromo())
    ])
    .then(() => {
      ReactDom.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.querySelector(`#root`)
      );
    })
    .catch((err) => {
      ReactDom.render(
          <PageWarring>
            <ErrorMessage errorCode={err.response.status} />
          </PageWarring>,
          document.querySelector(`#root`)
      );
    });
  });
