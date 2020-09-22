import Image from './base/Image';
import Button from './base/Button';
import Component from './base/Component';

class Header extends Component {
  private logoComponent: Image;
  private loginButtonComponent: Button;
  private searchButtonComponent: Button;
  private sellButtonComponent: Button;
  private messagesButtonComponent: Button;
  private profileButtonComponent: Button;
  private mobileMenuButtonComponent: Button;

  constructor() {
    super('header');
  }

  // Common

  public messagesButton(): Button {
    this.messagesButtonComponent =
      this.messagesButtonComponent || new Button(this.appendTestId('navigation__messages'));
    return this.messagesButtonComponent;
  }

  public logo(): Image {
    this.logoComponent = this.logoComponent || new Image('a[href="/"] svg');
    return this.logoComponent;
  }

  public loginButton(): Button {
    this.loginButtonComponent = this.loginButtonComponent || new Button('a[href="/login/"]');
    return this.loginButtonComponent;
  }

  // Large screen

  public searchButton(): Button {
    this.searchButtonComponent = this.searchButtonComponent || new Button(this.appendTestId('navigation__search'));
    return this.searchButtonComponent;
  }

  public sellButton(): Button {
    this.sellButtonComponent = this.sellButtonComponent || new Button(this.appendTestId('navigation__list'));
    return this.sellButtonComponent;
  }

  public profileButton(): Button {
    this.profileButtonComponent = this.profileButtonComponent || new Button(this.appendTestId('navigation__profile'));
    return this.profileButtonComponent;
  }

  // Small screen

  public mobileMenuButton(): Button {
    this.mobileMenuButtonComponent =
      this.mobileMenuButtonComponent || new Button(this.append('[data-id="mobileNavigation"]'));
    return this.mobileMenuButtonComponent;
  }

  public searchMobileButton(): Button {
    this.mobileMenuButtonComponent = this.mobileMenuButtonComponent ||
      new Button('div[class*="MobileNavigationLayout"] a[href="/search/"]');
    return this.mobileMenuButtonComponent;
  }

}

export default Header;
