import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {mockFilms} from "../../mocks/mock-for-tests";
import {Router} from "react-router-dom";
import {history} from "../../history";


it(`Render SmallMovieCard`, () => {
  const film = mockFilms[1];

  const tree = renderer.create(
      <Router history={history}>
        <SmallMovieCard
          film={film}
          index={1}
          renderVideoPlayer={() => {}}
          startPlayHandler={() => {}}
          stopPlayHandler={() => {}}
          isPlaing={false}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
