import Header from '../components/Header';

class DepopHomePage {
  private headerComponent: Header;

  public header(): Header {
    this.headerComponent = this.headerComponent || new Header();
    return this.headerComponent;
  }
}

export default DepopHomePage;
