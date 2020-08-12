import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {Router} from "react-router-dom";
import {history} from "../../history";
import {noop} from "../../mocks/mock-for-tests";

it(`Render SignIn default`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          onHandleSubmit={noop}
          loginClass={`loginClass`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={noop}
          onResetPasswordClassName={noop}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={false}
          onGetLoginValue={noop}
          onGetPasswordValue={noop}
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
          onHandleSubmit={noop}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={noop}
          onResetPasswordClassName={noop}
          invalidLogin={true}
          badRequest={false}
          invalidPassword={false}
          onGetLoginValue={noop}
          onGetPasswordValue={noop}
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
          onHandleSubmit={noop}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass-error`}
          onResetLoginClassName={noop}
          onResetPasswordClassName={noop}
          invalidLogin={false}
          badRequest={false}
          invalidPassword={true}
          onGetLoginValue={noop}
          onGetPasswordValue={noop}
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
          onHandleSubmit={noop}
          loginClass={`loginClass-error`}
          passwordClass={`passwordClass`}
          onResetLoginClassName={noop}
          onResetPasswordClassName={noop}
          invalidLogin={false}
          badRequest={true}
          invalidPassword={false}
          onGetLoginValue={noop}
          onGetPasswordValue={noop}
          authStatus={`NO_AUTH`}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
