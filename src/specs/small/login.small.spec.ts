import { navigate } from '../../lib/utils';
import LoginPage from '../../page-objects/Login.page';
import { TEST_USER, TEST_USER_PASSWORD } from '../../constants/global';
import DepopHomePage from '../../page-objects/DepopHome.page';

describe('Login page', () => {
  const loginPage = new LoginPage();
  const loginForm = loginPage.loginForm();
  const homepage = new DepopHomePage();

  before(() => {
    navigate('/login');
  });

  it('header is displayed', () => {
    expect(loginPage.header().isVisible()).toEqual(true);
  });

  it('Mobile menu button is displayed', () => {
    expect(loginPage.header().mobileMenuButton().isVisible()).toEqual(true);
  });

  it('section title is displayed', () => {
    expect(loginPage.sectionTitle().isVisible()).toEqual(true);
  });

  it('Login button is displayed', () => {
    expect(loginForm.loginButton().isVisible()).toEqual(true);
  });

  it('Facebook button is displayed', () => {
    expect(loginPage.facebookButton().isVisible()).toEqual(true);
  });

  it('Sign up button is displayed', () => {
    expect(loginPage.signupButton().isVisible()).toEqual(true);
  });

  it('Search button is not displayed', () => {
    expect(loginPage.header().searchMobileButton().isNotVisible()).toEqual(true);
  });

  it('main page content is not displayed', () => {
    expect(homepage.mainContent().isNotVisible()).toEqual(true);
  });

  it('Login is successful when submitting valid credentials', () => {
    loginForm.username().setValue(TEST_USER);
    loginForm.password().setValue(TEST_USER_PASSWORD);
    loginForm.loginButton().click();
    expect(loginPage.header().loginButton().isNotVisible()).toEqual(true);
    expect(loginPage.header().profileButton().isNotVisible()).toEqual(true);
    expect(loginPage.header().mobileMenuButton().isVisible()).toEqual(true);
    expect(loginPage.header().searchMobileButton().isVisible()).toEqual(true);
    expect(homepage.mainContent().isVisible()).toEqual(true);
  });
});
