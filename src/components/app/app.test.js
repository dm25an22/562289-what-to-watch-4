import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {mockFilms} from "../../mocks/mock-for-tests";

it(`Render App`, () => {
  const tree = renderer.create(
      <App
        films={mockFilms}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
