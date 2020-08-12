import * as React from "react";
import * as renderer from "react-test-renderer";
import Header from "./header";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";
import {userDataMock} from "../../mocks/mock-for-tests";

const mockStore = configureStore({});

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

it(`renders Headers component without authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userData: userDataMock
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header userData={userDataMock}/>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders Headers component with authorization`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userDataMock
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header userData={userDataMock} />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders Headers component with class "movie-card__head"`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userDataMock
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header
            userData={userDataMock}
            className={`movie-card__head`}
          />
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it(`renders Headers component with class "user-page__head" and children`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userData: userDataMock
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <Header
            userData={userDataMock}
            className={`user-page__head`}
          >
            <React.Fragment>
              <h1 className="page-title user-page__title">My list</h1>
            </React.Fragment>
          </Header>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
