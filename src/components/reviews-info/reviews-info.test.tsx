import * as React from "react";
import * as renderer from "react-test-renderer";
import {ReviewsInfo} from "./reviews-info";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import {commentsMock, noop} from "../../mocks/mock-for-tests";

const mockStore = configureStore({});

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
          setInitialComments={noop}
          comments={commentsMock}
          loadComments={noop}
          onSuccess={noop}
          onError={noop}
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
          setInitialComments={noop}
          comments={commentsMock.slice(0, 1)}
          loadComments={noop}
          onSuccess={noop}
          onError={noop}
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
          setInitialComments={noop}
          comments={commentsMock.slice(0, 2)}
          loadComments={noop}
          onSuccess={noop}
          onError={noop}
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
          setInitialComments={noop}
          comments={null}
          loadComments={noop}
          onSuccess={noop}
          onError={noop}
          isLoaded={true}
          errorCode={null}
          isLoading={false}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
