import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { testId } from '../lib/utils';
import Button from '../components/base/Button';
import Text from '../components/base/Text';

class LoginPage {
  private headerComponent: Header;
  private sectionTitleComponent: Text;
  private loginFormComponent: LoginForm;
  private facebookButtonComponent: Button;
  private signupButtonComponent: Button;

  public header(): Header {
    this.headerComponent = this.headerComponent || new Header();
    return this.headerComponent;
  }

  public sectionTitle(): Text {
    this.sectionTitleComponent = this.sectionTitleComponent || new Text('h1');
    return this.sectionTitleComponent;
  }

  public loginForm(): LoginForm {
    this.loginFormComponent = this.loginFormComponent || new LoginForm(testId('login__form'));
    return this.loginFormComponent;
  }

  public facebookButton(): Button {
    this.facebookButtonComponent = this.facebookButtonComponent || new Button(testId('facebook-button'));
    return this.facebookButtonComponent;
  }

  public signupButton(): Button {
    this.signupButtonComponent = this.signupButtonComponent || new Button('a[href="https://signup.depop.com"]');
    return this.signupButtonComponent;
  }
}

export default LoginPage;
