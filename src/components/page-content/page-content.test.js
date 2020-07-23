import React from "react";
import renderer from "react-test-renderer";
import PageContent from "./page-content.jsx";

const MockComponent = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Text</h1>
      </div>
    </React.Fragment>
  );
};
it(`render PageContent component with children`, () => {

  const tree = renderer.create(
      <PageContent>
        <MockComponent />
      </PageContent>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
