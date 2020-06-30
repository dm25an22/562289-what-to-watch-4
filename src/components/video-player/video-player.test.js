import React from "react";
import rerender from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

it(`Render VideoPlayer`, () => {
  const tree = rerender.create(
      <VideoPlayer
        preview={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
        poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
        isPlaying={true}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});