import React, {createRef} from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {history} from "../../history.js";
import Logo from "../logo/logo.jsx";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {onSubmit} = this.props;

    onSubmit({
      email: this._loginRef.current.value,
      password: this._passwordRef.current.value
    });
  }

  render() {
    const {authStatus} = this.props;

    if (authStatus === AuthorizationStatus.AUTH) {
      history.goBack();
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form onSubmit={this.handleSubmit} action="#" className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input ref={this._loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input ref={this._passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required/>
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

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired
};

export default SignIn;
