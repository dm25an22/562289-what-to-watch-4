import * as React from "react";
import * as renderer from "react-test-renderer";
import ButtonMyList from "./button-my-list";
import {mockFilms} from "../../../mocks/mock-for-tests";
import {noop} from "../../../mocks/mock-for-tests";

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`
};


it(`render ButtonMyList component with status "Add"`, () => {
  const tree = renderer.create(
      <ButtonMyList
        authStatus={AuthorizationStatus.NO_AUTH}
        onMyListBtnClick={noop}
        film={mockFilms[0]}
        status={1}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render ButtonMyList component with status "in List"`, () => {
  const tree = renderer.create(
      <ButtonMyList
        authStatus={AuthorizationStatus.AUTH}
        onMyListBtnClick={noop}
        film={mockFilms[0]}
        status={0}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
