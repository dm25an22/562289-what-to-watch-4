import React from "react";
import withValidateSignIn from "./with-validate-sign-in";
import {shallow} from "enzyme";

const CLASS_NAME_FIELDS = {
  OK: `sign-in__field`,
  ERROR: `sign-in__field--error`
};

const MockComponent = () => <div />;
const MockComponentWrapped = withValidateSignIn(MockComponent);

it(`check default state`, () => {
  const onSubmit = jest.fn();

  const tree = shallow(
      <MockComponentWrapped
        onSubmit={onSubmit}
      />
  );

  expect(tree.state().invalidLogin).toEqual(false);
  expect(tree.state().invalidPassword).toEqual(false);
});

it(`check with invalid email, form not send`, () => {
  const onSubmit = jest.fn();
  const tree = shallow(
      <MockComponentWrapped
        onSubmit={onSubmit}
      />
  );

  tree.props().getLoginValue(`123`);
  tree.props().handleSubmit();

  expect(tree.state().loginClass).toEqual(CLASS_NAME_FIELDS.ERROR);
  expect(tree.props().invalidLogin).toEqual(true);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});

it(`check with invalid password, form not send`, () => {
  const onSubmit = jest.fn();
  const tree = shallow(
      <MockComponentWrapped
        onSubmit={onSubmit}
      />
  );

  tree.props().getLoginValue(`max@gmail.com`);
  tree.props().getPasswordValue(``);
  tree.props().handleSubmit();

  expect(tree.props().invalidLogin).toEqual(false);
  expect(tree.state().passwordClass).toEqual(CLASS_NAME_FIELDS.ERROR);
  expect(tree.state().invalidPassword).toEqual(true);
  expect(onSubmit).toHaveBeenCalledTimes(0);
});


it(`check sent form with valid data`, () => {
  const onSubmit = jest.fn();

  const tree = shallow(
      <MockComponentWrapped
        onSubmit={onSubmit}
      />
  );

  tree.props().getLoginValue(`max@gmail.com`);
  tree.props().getPasswordValue(`123`);
  tree.props().handleSubmit();

  expect(onSubmit).toHaveBeenCalledTimes(1);
});

