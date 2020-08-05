import React from "react";
import PropTypes from "prop-types";
import {history} from "../../history";

const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const CLASS_NAME_FIELDS = {
  OK: `sign-in__field`,
  ERROR: `sign-in__field--error`
};

const withValidateSignIn = (Component) => {
  class WithValidateSignIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        invalidLogin: false,
        invalidPassword: false,
        loginClass: CLASS_NAME_FIELDS.OK,
        passwordClass: CLASS_NAME_FIELDS.OK,
        badRequest: false,
        loginValue: ``,
        passwordValue: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetLoginClassName = this.resetLoginClassName.bind(this);
      this.resetPasswordClassName = this.resetPasswordClassName.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
      this.onError = this.onError.bind(this);
      this.getLoginValue = this.getLoginValue.bind(this);
      this.getPasswordValue = this.getPasswordValue.bind(this);
    }

    handleSubmit() {
      const emailValue = this.state.loginValue;
      const passwordValue = this.state.passwordValue;

      this.setState({
        badRequest: false
      });

      if (this.validEmail(emailValue)) {
        this.setState({
          invalidLogin: false,
        });

      } else {
        this.setState({
          invalidLogin: true,
          invalidPassword: false,
          loginClass: CLASS_NAME_FIELDS.ERROR,
          passwordClass: CLASS_NAME_FIELDS.OK,
        });

        return;
      }

      if (this.validPassword(passwordValue)) {
        this.setState({
          invalidPassword: false,
        });
      } else {
        this.setState({
          invalidPassword: true,
          passwordClass: CLASS_NAME_FIELDS.ERROR,
        });

        return;
      }

      const {onSubmit} = this.props;

      onSubmit({
        email: emailValue,
        password: passwordValue
      }, this.onSuccess, this.onError);
    }

    onSuccess() {
      history.goBack();
    }

    onError() {
      this.setState({
        badRequest: true
      });
    }

    validEmail(emailValue) {
      return EMAIL_REGEXP.test(emailValue);
    }

    validPassword(passwordValue) {
      return passwordValue.length > 0;
    }

    resetLoginClassName() {
      this.setState({
        loginClass: CLASS_NAME_FIELDS.OK
      });
    }

    resetPasswordClassName() {
      this.setState({
        passwordClass: CLASS_NAME_FIELDS.OK
      });
    }

    getLoginValue(value) {
      this.setState({
        loginValue: value
      });
    }

    getPasswordValue(value) {
      this.setState({
        passwordValue: value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleSubmit={this.handleSubmit}
          loginClass={this.state.loginClass}
          passwordClass={this.state.passwordClass}
          resetLoginClassName={this.resetLoginClassName}
          resetPasswordClassName={this.resetPasswordClassName}
          invalidLogin={this.state.invalidLogin}
          badRequest={this.state.badRequest}
          invalidPassword={this.state.invalidPassword}
          getLoginValue={this.getLoginValue}
          getPasswordValue={this.getPasswordValue}
        />
      );
    }
  }

  WithValidateSignIn.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithValidateSignIn;
};


export default withValidateSignIn;

