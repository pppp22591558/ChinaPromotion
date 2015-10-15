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
    children: PropTypes.element,
    error: PropTypes.object,
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
  }

  state = {
    viewport: 0,
  }

  componentWillMount() {
    this.setState({
      viewport: 0,
    });
  }
  componentDidMount() {
    window.addEventListener('resize', ()=>{
      this.setState({
        viewport: window.innerWidth,
      });
      console.log(this.state.viewport);
    });
  }

  render() {
    if (this.state.viewport < 968) {
      return this.renderMobile();
    } else {
      return this.renderDesktop();
    }
  }

  renderDesktop(){
    return(
      <div className="App-bg">
        <HeaderDesktop />
        <Content />
        <FooterDesktop />
      </div>
    )
  }

  renderMobile(){
    return(
      <div className="App-bg">
        <Content version = {this.props.version} />
      </div>
    )
  }

}

export default App;
