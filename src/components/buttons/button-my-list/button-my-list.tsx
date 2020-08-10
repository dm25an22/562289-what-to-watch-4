import * as React from "react";
import {AuthorizationStatus} from "../../../reducer/user/user";
import {AppRoute} from "../../../enum";
import {history} from "../../../history";
import {filmType} from "../../../types";

interface Props {
  authStatus: string,
  onMyListBtnClick: (film: filmType, status: number) => void,
  film: filmType,
  status: number
}

const ButtonMyList: React.FC<Props> = (props: Props) => {
  const {
    authStatus,
    onMyListBtnClick,
    film,
    status
  } = props;

  return (
    <button
      onClick={() => {
        if (authStatus === AuthorizationStatus.NO_AUTH) {
          history.push(AppRoute.LOGIN);
        } else {
          onMyListBtnClick(film, status);
        }
      }}
      className="btn btn--list movie-card__button" type="button">

      {status ?
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
        :
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list" />
        </svg>}

      <span>My list</span>
    </button>
  );
};

export default ButtonMyList;
