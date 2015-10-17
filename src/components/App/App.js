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

  componentDidMount() {
    window.addEventListener('resize', ()=>{
      this.setState({
        viewport: window.innerWidth,
      });
    });
  }

  render() {
    return(
      <div className="App-bg">
        <Content version = {this.props.version} />
      </div>
    )
    // if (this.state.viewport < 768) {
    //   return this.renderMobile();
    // } else {
    //   return this.renderDesktop();
    // }
    // return false;
  }

  // renderDesktop(){
  //   return(
  //     <div className="App-bg">
  //       <HeaderDesktop />
  //       <h1>Desktop</h1>
  //       <Content />
  //       <FooterDesktop />
  //     </div>
  //   )
  // }

  // renderMobile(){
  //   return(
  //     <div className="App-bg">
  //       <Content version = {this.props.version} />
  //     </div>
  //   )
  // }

}

export default App;
