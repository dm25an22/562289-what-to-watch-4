import * as React from "react";
import Comment from "../comment/comment";
import {connect} from "react-redux";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data";
import {getComments} from "../../reducer/data/selectors";
import {commentType} from "../../types";

interface Props {
  id: number,
  comments: commentType[],
  loadComments: (id: number, onSuccess: () => void, onError: () => void) => void,
  setInitialComments: () => void,
  isLoaded: boolean,
  errorCode?: number,
  onSuccess: () => void,
  onError: () => void,
  isLoading: boolean,
}

class ReviewsInfo extends React.PureComponent<Props> {
  componentDidMount() {
    const {onSuccess, onError} = this.props;
    this.props.loadComments(this.props.id, onSuccess, onError);
  }

  componentWillUnmount() {
    this.props.setInitialComments();
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

  _renderCommentsList(start, end?) {
    if (this.props.comments !== null) {
      return this.props.comments.slice(start, end).map((it) => <Comment key={it.id} data={it} />);
    } else {
      return null;
    }
  }

  render() {
    const {isLoaded, errorCode, isLoading} = this.props;
    const halfLength = this._getHalfLength();

    if (isLoading) {
      return (
        <React.Fragment />
      );
    }

    return (
      <React.Fragment>
        {isLoaded
          ?
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {this._renderCommentsList(0, halfLength)}
            </div>
            <div className="movie-card__reviews-col">
              {this._renderCommentsList(halfLength)}
            </div>
          </div>
          :
          <div style={{textAlign: `center`, marginTop: `120px`}}><h2>Error loading data from server: {errorCode} <br />Try reloading the page</h2></div>
        }
      </React.Fragment>
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
    loadComments(id, onSuccess, onError) {
      dispatch(DataOperation.loadComments(id, onSuccess, onError));
    },

    setInitialComments() {
      dispatch(ActionCreator.setInitialComments());
    }
  };
};

export {ReviewsInfo};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsInfo);
