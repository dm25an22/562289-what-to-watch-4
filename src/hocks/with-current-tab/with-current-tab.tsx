import * as React from "react";
import OverviewInfo from "../../components/overview-info/overview-info";
import DetailsInfo from "../../components/details-info/details-info";
import ReviewsInfo from "../../components/reviews-info/reviews-info";
import withLoadStatus from "../with-load-status/with-load-status";
import {TabName} from "../../enum.js";
import {filmType} from "../../types";
import {Subtract} from "utility-types";

const ReviewsInfoWrraped = withLoadStatus(ReviewsInfo);

interface State {
  currentTab: string
}

interface InjectingProps {
  currentTab: string,
  onClickTab: (tabName: string) => void,
  renderCurrentInfo: (film: filmType) => React.ReactNode | null
}

const withCurrentTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithCurrentTab extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TabName.OVERVIEW
      };

      this.onClickTab = this.onClickTab.bind(this);
      this.renderCurrentInfo = this.renderCurrentInfo.bind(this);
    }

    onClickTab(tabName) {
      this.setState({
        currentTab: tabName
      });
    }

    renderCurrentInfo(film) {
      switch (this.state.currentTab) {
        case TabName.OVERVIEW:
          return <OverviewInfo film={film} />;

        case TabName.DETAILS:
          return <DetailsInfo film={film} />;

        case TabName.REVIEWS:
          return <ReviewsInfoWrraped id={film.id} />;
      }

      return null;
    }

    render() {
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          onClickTab={this.onClickTab}
          renderCurrentInfo={this.renderCurrentInfo}
        />
      );
    }
  }

  return WithCurrentTab;
};

export default withCurrentTab;
