import * as React from 'react';
import Header from "../header/header";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../enum';
import {history} from '../../history';
import {convertColor} from "../../utils";
import {filmType, newCommentType} from '../../types';

const MIN_POST_LENGTH = 50;
const MAX_POST_LENGTH = 400;

interface Props {
  film: filmType,
  onSubmitAddReview: (id: number, newComment: newCommentType, onSuccess: () => void, onError: () => void) => void,
  showErrorStyle: () => void,
  hideErrorStyle: () => void,
  errorStyle: string
}

class AddReview extends React.PureComponent<Props> {
  private reviewTextRef: React.RefObject<HTMLTextAreaElement>
  private formRef: React.RefObject<HTMLFormElement>
  private postBtn: React.RefObject<HTMLButtonElement>

  constructor(props) {
    super(props);

    this.reviewTextRef = React.createRef();
    this.formRef = React.createRef();
    this.postBtn = React.createRef();

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  _disabledForm(bool) {
    const radioButtons = this.formRef.current.rating;

    Array.from(radioButtons)
      .map((it: HTMLInputElement) => {
        it.disabled = bool;
      });

    this.reviewTextRef.current.disabled = bool;
    this.postBtn.current.disabled = bool;
  }

  onSuccess() {
    this._disabledForm(false);
    history.push(`${AppRoute.FILM}/${this.props.film.id}`);
  }

  onError() {
    const {showErrorStyle, hideErrorStyle} = this.props;

    this._disabledForm(false);
    showErrorStyle();
    hideErrorStyle();
  }

  handlerSubmit() {
    this._disabledForm(true);
    const {onSubmitAddReview, film} = this.props;

    const newComment = {
      rating: this.formRef.current.rating.value,
      comment: this.reviewTextRef.current.value
    };

    onSubmitAddReview(film.id, newComment, this.onSuccess, this.onError);
  }

  render() {
    const {
      title,
      moviePoster,
      id,
      bigPoster,
      backgroundColor
    } = this.props.film;

    const {errorStyle} = this.props;

    const newBackgroundColor = convertColor(backgroundColor);

    return (
      <section style={{background: backgroundColor}} className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={bigPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.FILM}/${id}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={moviePoster} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            ref={this.formRef}
            onSubmit={(evt) => {
              evt.preventDefault();
              this.handlerSubmit();
            }}
            action="#"
            className="add-review__form"
          >
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div style={{background: newBackgroundColor, border: errorStyle}} className="add-review__text">
              <textarea required ref={this.reviewTextRef} minLength={MIN_POST_LENGTH} maxLength={MAX_POST_LENGTH} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button ref={this.postBtn} className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }

}

export default AddReview;
