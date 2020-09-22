import Header from '../components/Header';
import Component from '../components/base/Component';

class DepopHomePage {
  private headerComponent: Header;

  public header(): Header {
    this.headerComponent = this.headerComponent || new Header();
    return this.headerComponent;
  }

  // Extending Component here, but optimally it would be a full independent component
  // For the purposes of the task at hand, having this is enough
  public mainContent(): Component {
    return new Component('main');
  }
}

export default DepopHomePage;
