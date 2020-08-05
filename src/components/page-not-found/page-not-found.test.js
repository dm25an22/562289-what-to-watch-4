import React from 'react';
import NotFoundMessage from './page-not-found.jsx';
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {history} from "../../history";


it(`render PageNotFound component`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <NotFoundMessage />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
