import React from "react";
import {TabName} from "../../consts";
import OverviewInfo from "../../components/overview-info/overview-info.jsx";
import DetailsInfo from "../../components/details-info/details-info.jsx";
import ReviewsInfo from "../../components/reviews-info/reviews-info.jsx";
import withLoadStatus from "../with-load-status/with-load-status";

const ReviewsInfoWrraped = withLoadStatus(ReviewsInfo);

const withCurrentTab = (Component) => {
  class WithCurrentTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TabName.OVERVIEW
      };

      this.clickOnTab = this.clickOnTab.bind(this);
      this.renderCurrentInfo = this.renderCurrentInfo.bind(this);
    }

    clickOnTab(tabName) {
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
          clickOnTab={this.clickOnTab}
          renderCurrentInfo={this.renderCurrentInfo}
        />
      );
    }
  }

  return WithCurrentTab;
};

export default withCurrentTab;
