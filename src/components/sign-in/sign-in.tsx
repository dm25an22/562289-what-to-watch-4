import * as React from "react";
import Footer from "../footer/footer";
import Logo from "../logo/logo";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../enum.js";
import {history} from "../../history.js";

interface Props {
  onHandleSubmit: () => void,
  loginClass: string,
  passwordClass: string
  onResetLoginClassName: () => void,
  onResetPasswordClassName: () => void,
  invalidLogin: boolean,
  badRequest: boolean,
  invalidPassword: boolean,
  onGetLoginValue: (value: string) => void,
  onGetPasswordValue: (value: string) => void,
  authStatus: string
}

class SignIn extends React.PureComponent<Props> {
  componentDidMount() {
    if (this.props.authStatus === AuthorizationStatus.AUTH) {
      history.push(AppRoute.ROOT);
    }
  }

  render() {
    const {
      onHandleSubmit,
      loginClass,
      passwordClass,
      onResetLoginClassName,
      onResetPasswordClassName,
      invalidLogin,
      badRequest,
      invalidPassword,
      onGetLoginValue,
      onGetPasswordValue,
    } = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              onHandleSubmit();
            }}
            action="#"
            className="sign-in__form"
            noValidate
          >

            <div className="sign-in__message">
              {invalidLogin && <p>Please enter a valid email address</p>}
              {badRequest && <p>We can’t recognize this email <br /> and password combination. Please try again.</p>}
              {invalidPassword && <p>Your password must contain at least one character</p>}
            </div>

            <div className="sign-in__fields">
              <div className={loginClass}>
                <input
                  onFocus={onResetLoginClassName}
                  onChange={(evt) => {
                    onGetLoginValue(evt.target.value);
                  }}
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"/
                >
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={passwordClass}>
                <input
                  onFocus={onResetPasswordClassName}
                  onChange={(evt) => {
                    onGetPasswordValue(evt.target.value);
                  }}
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"/
                >
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SignIn;
