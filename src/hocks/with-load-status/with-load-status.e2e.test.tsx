import * as React from "react";
import withLoadStatus from "./with-load-status";
import {shallow} from "enzyme";

const MockComponent: React.FC = () => <div />;
const MockComponentWrraped = withLoadStatus(MockComponent);
it(`check success loaded`, () => {
  const tree = shallow(
      <MockComponentWrraped />
  );

  tree.props().onSuccess();
  expect(tree.state().isLoaded).toEqual(true);
  expect(tree.state().isLoading).toEqual(false);
});

it(`check error loaded with error code`, () => {
  const tree = shallow(
      <MockComponentWrraped />
  );

  tree.props().onError(404);
  expect(tree.state().isLoaded).toEqual(false);
  expect(tree.state().isLoading).toEqual(false);
  expect(tree.state().errorCode).toEqual(404);
});
