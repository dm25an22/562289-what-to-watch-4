import * as React from "react";
import {history} from "../../history";
import {Subtract} from "utility-types";

const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const CLASS_NAME_FIELDS = {
  OK: `sign-in__field`,
  ERROR: `sign-in__field--error`
};

interface State {
  invalidLogin: boolean,
  invalidPassword: boolean,
  loginClass: string,
  passwordClass: string,
  badRequest: boolean,
  loginValue: string,
  passwordValue: string
}

interface InjectingProps {
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
}

const withValidateSignIn = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithValidateSignIn extends React.PureComponent<T, State> {
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

      this.onHandleSubmit = this.onHandleSubmit.bind(this);
      this.onResetLoginClassName = this.onResetLoginClassName.bind(this);
      this.onResetPasswordClassName = this.onResetPasswordClassName.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
      this.onError = this.onError.bind(this);
      this.onGetLoginValue = this.onGetLoginValue.bind(this);
      this.onGetPasswordValue = this.onGetPasswordValue.bind(this);
    }

    onHandleSubmit() {
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

    onResetLoginClassName() {
      this.setState({
        loginClass: CLASS_NAME_FIELDS.OK
      });
    }

    onResetPasswordClassName() {
      this.setState({
        passwordClass: CLASS_NAME_FIELDS.OK
      });
    }

    onGetLoginValue(value) {
      this.setState({
        loginValue: value
      });
    }

    onGetPasswordValue(value) {
      this.setState({
        passwordValue: value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onHandleSubmit={this.onHandleSubmit}
          loginClass={this.state.loginClass}
          passwordClass={this.state.passwordClass}
          onResetLoginClassName={this.onResetLoginClassName}
          onResetPasswordClassName={this.onResetPasswordClassName}
          invalidLogin={this.state.invalidLogin}
          badRequest={this.state.badRequest}
          invalidPassword={this.state.invalidPassword}
          onGetLoginValue={this.onGetLoginValue}
          onGetPasswordValue={this.onGetPasswordValue}
        />
      );
    }
  }

  return WithValidateSignIn;
};


export default withValidateSignIn;

