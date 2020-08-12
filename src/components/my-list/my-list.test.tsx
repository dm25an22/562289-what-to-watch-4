import * as React from "react";
import * as renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {mockFilms} from "../../mocks/mock-for-tests";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import {history} from "../../history";

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};

const mockStore = configureStore({});


it(`render MyList component without favorites films`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      favorites: []
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <MyList favorites={[]}/>
        </Router>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render MyList component with favorites films`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mockFilms,
      favorites: [mockFilms[0]]
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Router history={history} >
          <MyList favorites={[mockFilms[0]]}/>
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
