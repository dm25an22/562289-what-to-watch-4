import * as React from "react";
import * as renderer from "react-test-renderer";
import LoadMoreButton from "./load-more-button";
import {noop} from "../../mocks/mock-for-tests";
it(`renders LoadMoreButton component`, () => {
  const tree = renderer.create(
      <LoadMoreButton
        onChangeCountShowCrads={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
