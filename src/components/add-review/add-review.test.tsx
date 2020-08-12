import * as React from 'react';
import * as renderer from "react-test-renderer";
import AddReview from "./add-review";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {userDataMock, noop, mockFilms} from "../../mocks/mock-for-tests";
import {Router} from "react-router-dom";
import {history} from "../../history";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

it(`render AddReview component`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userDataMock
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history}>
          <AddReview
            onSubmitAddReview={noop}
            showErrorStyle={noop}
            hideErrorStyle={noop}
            film={mockFilms[0]}
            errorStyle={`none`}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree);
});
