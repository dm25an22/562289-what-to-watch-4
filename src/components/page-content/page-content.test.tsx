import * as React from "react";
import * as renderer from "react-test-renderer";
import PageContent from "./page-content";
import {Router} from "react-router-dom";
import {history} from "../../history";

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
      <Router history={history} >
        <PageContent>
          <MockComponent />
        </PageContent>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
