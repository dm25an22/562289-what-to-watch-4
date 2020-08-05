import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from "react-router-dom";
import {history} from "../../history";

it(`Render SignIn default`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          handleSubmit={() => {}}
          loginClass={`loginClass`}
          passwordClass={`passwordClass`}
          resetLoginClassName={() => {}}
          resetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={false}
          getLoginValue={() => {}}
          getPasswordValue={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn with invalid login`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          handleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          resetLoginClassName={() => {}}
          resetPasswordClassName={() => {}}
          invalidLogin={true}
          badRequest={false}
          invalidPassword={false}
          getLoginValue={() => {}}
          getPasswordValue={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn with invalid password`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          handleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass-error`}
          resetLoginClassName={() => {}}
          resetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={true}
          getLoginValue={() => {}}
          getPasswordValue={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render SignIn with bad request`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          handleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          resetLoginClassName={() => {}}
          resetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={true}
          invalidPassword={false}
          getLoginValue={() => {}}
          getPasswordValue={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
