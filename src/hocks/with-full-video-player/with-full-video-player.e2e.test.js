import React from "react";
import withFullVideoPlayer from "./with-full-video-player";
import {mount} from "enzyme";
import {mockFilms} from "../../mocks/mock-for-tests";

const MockComponent = () => <div />;
const MockComponentwrraped = withFullVideoPlayer(MockComponent);

it(`test withFullVideoPlayer`, () => {
  const tree = mount(
      <MockComponentwrraped film={mockFilms[0]} />
  );

  const instance = tree.instance();

  expect(instance).to.be.instanceOf(MockComponentwrraped);
});
