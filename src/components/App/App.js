/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import HeaderMobile from '../mobile/Header';
import FooterMobile from '../mobile/Footer';
import HeaderDesktop from '../desktop/Header';
import FooterDesktop from '../desktop/Footer';
import Content from '../Content';

@withContext
@withStyles(styles)
@withViewport

class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
  }

  state = {
    viewport: 0
  }

  componentDidMount() {
    this.setState({
      viewport: window.innerWidth
    });
  }

  render() {
    if (this.state.viewport > 968) {
      return this.renderDesktop();
    } else {
      return this.renderMobile();
    }
  }

  renderDesktop(){
    return !this.props.error? (
      <div className="App-bg" style={{overflowY: 'hidden'}}>
        <HeaderDesktop />
        <Content />
        <FooterDesktop />
      </div>
    ) : this.props.children
  }

  renderMobile(){
    return !this.props.error? (
      <div className="App-bg" style={{overflowY: 'hidden'}}>
        <HeaderMobile />
        <Content />
        <FooterMobile />
      </div>
    ) : this.props.children
  }

}

export default App;
