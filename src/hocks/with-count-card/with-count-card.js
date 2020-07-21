import React from "react";
import { connect } from "react-redux";
import { getCurrentCountCards } from "../../reducer/app-state/selectors";

const withCountCard = (Component) => {
  class WithCountCard extends React.PureComponent {
    // constructor(props) {
    //   super(props);

    //   this.state = {
    //     currentCount: this.props.currentCountCards
    //   };
    // }

    render() {
      return (
        <Component
          {...this.props}
          // showButton={false}
        />
      );
    }
  }

  return WithCountCard;
};

// const mapStateToProps = (state) => {
//   return {
//     currentCountCards: getCurrentCountCards(state)
//   }
// }

export default withCountCard;
