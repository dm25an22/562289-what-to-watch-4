import React from "react";
import PropTypes from "prop-types";
import Comment from "../comment/comment.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {getComments} from "../../reducer/data/selectors";

class ReviewsInfo extends React.PureComponent {
  componentDidMount() {
    this.props.loadComments(this.props.film.id);
  }

  _getHalfLength() {
    if (this.props.comments !== null) {
      const lengthNumber = this.props.comments.length;

      let halfLength = null;
      if (lengthNumber % 2 === 0) {
        halfLength = lengthNumber / 2;
      } else {
        halfLength = Math.ceil(lengthNumber / 2);
      }

      return halfLength;
    }

    return null;
  }

  _renderCommentsListTest(start, end) {
    if (this.props.comments !== null) {
      return this.props.comments.slice(start, end).map((it) => <Comment key={it.id} data={it} />);
    } else {
      return null;
    }
  }

  render() {
    const halfLength = this._getHalfLength();
    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {this._renderCommentsListTest(0, halfLength)}
        </div>
        <div className="movie-card__reviews-col">
          {this._renderCommentsListTest(halfLength)}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    comments: getComments(state)
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    loadComments(id) {
      dispatch(DataOperation.loadComments(id));
    }
  };
};


ReviewsInfo.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  comments: PropTypes.any,
  loadComments: PropTypes.func.isRequired
};

export {ReviewsInfo};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsInfo);
