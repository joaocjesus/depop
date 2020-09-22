import Component from './base/Component';
import InputBox from './base/InputBox';
import Link from './base/Link';
import Button from './base/Button';
import Text from './base/Text';

class LoginForm extends Component {
  private usernameComponent: InputBox;
  private usernameRequiredComponent: Text;
  private passwordComponent: InputBox;
  private passwordRequiredComponent: Text;
  private errorMessageComponent: Text;
  private forgotPasswordLinkComponent: Link;
  private loginButtonComponent: Button;

  public username(): InputBox {
    this.usernameComponent = this.usernameComponent || new InputBox(this.appendTestId('username'));
    return this.usernameComponent;
  }

  public usernameRequiredMessage(): Text {
    this.usernameRequiredComponent =
      this.usernameRequiredComponent || new Text(this.appendTestId('login__error--username'));
    return this.usernameRequiredComponent;
  }

  public password(): InputBox {
    this.passwordComponent = this.passwordComponent || new InputBox(this.appendTestId('password'));
    return this.passwordComponent;
  }

  public passwordRequiredMessage(): Text {
    this.passwordRequiredComponent =
      this.passwordRequiredComponent || new Text(this.appendTestId('login__error--password'));
    return this.passwordRequiredComponent;
  }

  public errorMessage(): Text {
    this.errorMessageComponent = this.errorMessageComponent || new Text(this.appendTestId('login__error--server'));
    return this.errorMessageComponent;
  }

  public forgotPasswordLink(): Link {
    this.forgotPasswordLinkComponent = this.forgotPasswordLinkComponent || new Link('a[href="/password-reset/"]');
    return this.forgotPasswordLinkComponent;
  }

  public loginButton(): Button {
    this.loginButtonComponent = this.loginButtonComponent || new Button(this.appendTestId('login__cta'));
    return this.loginButtonComponent;
  }
}

export default LoginForm;
