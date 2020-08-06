import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {Router} from "react-router-dom";
import {history} from "../../history";

it(`Render SignIn default`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onHandleSubmit={() => {}}
          loginClass={`loginClass`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={() => {}}
          onResetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={false}
          onGetLoginValue={() => {}}
          onGetPasswordValue={() => {}}
          authStatus={`NO_AUTH`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn with invalid login`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onHandleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={() => {}}
          onResetPasswordClassName={() => {}}
          invalidLogin={true}
          badRequest={false}
          invalidPassword={false}
          onGetLoginValue={() => {}}
          onGetPasswordValue={() => {}}
          authStatus={`NO_AUTH`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render SignIn with invalid password`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onHandleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass-error`}
          onResetLoginClassName={() => {}}
          onResetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={true}
          onGetLoginValue={() => {}}
          onGetPasswordValue={() => {}}
          authStatus={`NO_AUTH`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render SignIn with bad request`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onHandleSubmit={() => {}}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={() => {}}
          onResetPasswordClassName={() => {}}
          invalidLogin={false}
          badRequest={true}
          invalidPassword={false}
          onGetLoginValue={() => {}}
          onGetPasswordValue={() => {}}
          authStatus={`NO_AUTH`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
