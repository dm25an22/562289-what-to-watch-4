import * as React from "react";
import * as renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {mockFilms, noop} from "../../mocks/mock-for-tests";
import {Router} from "react-router-dom";
import {history} from "../../history";


it(`Render SmallMovieCard`, () => {
  const film = mockFilms[1];

  const tree = renderer.create(
      <Router history={history}>
        <SmallMovieCard
          film={film}
          renderVideoPlayer={noop}
          onStartPlayHandler={noop}
          onStopPlayHandler={noop}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
