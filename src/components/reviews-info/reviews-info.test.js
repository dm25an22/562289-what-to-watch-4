import React from "react";
import renderer from "react-test-renderer";
import {ReviewsInfo} from "./reviews-info.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore({});

const commentsMock = [
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  },
  {
    "id": 2,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 2.0,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  },
  {
    "id": 3,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 4.3,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

it(`render ReviewsInfo component with 3 comments`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments: commentsMock
    },
  });

  const tree = renderer.create(
      <Provider store={store} >
        <ReviewsInfo
          id={1}
          setInitialComments={() => {}}
          comments={commentsMock}
          loadComments={() => {}}
          onSuccess={() => {}}
          onError={() => {}}
          errorCode={null}
          isLoaded={true}
          isLoading={false}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render ReviewsInfo component with 1 comments`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments: commentsMock
    },
  });

  const tree = renderer.create(
      <Provider store={store} >
        <ReviewsInfo
          id={1}
          setInitialComments={() => {}}
          comments={commentsMock.slice(0, 1)}
          loadComments={() => {}}
          onSuccess={() => {}}
          onError={() => {}}
          isLoaded={true}
          errorCode={null}
          isLoading={false}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render ReviewsInfo component with 2 comments`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments: commentsMock
    },
  });

  const tree = renderer.create(
      <Provider store={store} >
        <ReviewsInfo
          id={1}
          setInitialComments={() => {}}
          comments={commentsMock.slice(0, 2)}
          loadComments={() => {}}
          onSuccess={() => {}}
          onError={() => {}}
          isLoaded={true}
          errorCode={null}
          isLoading={false}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`render ReviewsInfo component without comments`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      comments: commentsMock
    },
  });

  const tree = renderer.create(
      <Provider store={store} >
        <ReviewsInfo
          id={1}
          setInitialComments={() => {}}
          comments={null}
          loadComments={() => {}}
          onSuccess={() => {}}
          onError={() => {}}
          isLoaded={true}
          errorCode={null}
          isLoading={false}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
