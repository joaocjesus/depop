import { navigate } from '../../lib/utils';
import LoginPage from '../../page-objects/Login.page';
import { TEST_USER, TEST_USER_PASSWORD } from '../../constants/global';

const INVALID_USERNAME = 'INVALID_USERNAME';
const INVALID_PASSWORD = 'INVALID_PASSWORD';

describe('Login', () => {
  const page = new LoginPage();
  const loginForm = page.loginForm();

  before(() => {
    navigate('/login');
  });

  it('header is displayed', () => {
    expect(page.header().isVisible()).toEqual(true);
  });

  it('section title is displayed', () => {
    expect(page.sectionTitle().isVisible()).toEqual(true);
  });

  it('Login button is displayed', () => {
    expect(loginForm.loginButton().isVisible()).toEqual(true);
  });

  it('Facebook button is displayed', () => {
    expect(page.facebookButton().isVisible()).toEqual(true);
  });

  it('Sign up button is displayed', () => {
    expect(page.signupButton().isVisible()).toEqual(true);
  });

  describe('Error', () => {
    it('is shown when trying to login with blank username', () => {
      loginForm.loginButton().click();
      expect(loginForm.usernameRequiredMessage().isVisible()).toEqual(true);
      expect(loginForm.usernameRequiredMessage().getText()).toEqual('Username or email is required');
    });

    it('is shown when trying to login with blank password', () => {
      expect(loginForm.passwordRequiredMessage().isVisible()).toEqual(true);
      expect(loginForm.passwordRequiredMessage().getText()).toEqual('Password is required');
    });

    it('is shown when filling in wrong username', () => {
      loginForm.username().setValue(INVALID_USERNAME);
      loginForm.password().setValue(TEST_USER_PASSWORD);
      loginForm.loginButton().click();
      expect(loginForm.errorMessage().isVisible()).toEqual(true);
      expect(loginForm.errorMessage().getText()).toEqual('Invalid username or password. Please try again');
    });

    it('is hidden when editing username', () => {
      loginForm.username().setValue(TEST_USER);
      expect(loginForm.errorMessage().isNotVisible()).toEqual(true);
    });

    it('is shown when filling in wrong password', () => {
      loginForm.password().setValue(INVALID_PASSWORD);
      loginForm.loginButton().click();
      expect(loginForm.errorMessage().isVisible()).toEqual(true);
      expect(loginForm.errorMessage().getText()).toEqual('Invalid username or password. Please try again');
    });

    it('is hidden when editing password', () => {
      loginForm.username().setValue(TEST_USER_PASSWORD);
      expect(loginForm.errorMessage().isNotVisible()).toEqual(true);
    });
  });


});
