import React, { Component } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Content.css';
import SwipeView from '../mobile/SwipeView';

@withStyles(styles)
class Content extends Component {

  state = {
    isActive: false,
  }

  componentDidMount() {
    //set the title
    document.title = 'China Promotion Page';
    //get the current window's width and height to switch mobile/ desktop view
    this.setState({
      isActive: true
    });
  }
  
  render(){
    if (this.state.viewWidth > 968){
      return this.renderDesktop();
    } else {
      return this.renderMobile();
    }
  }
  renderDesktop() {
    return(
      <div></div>
    )
  }
  renderMobile() {
    return(
      this.state.isActive?
      <div className="Content">
        <SwipeView />
        <div className="Content-left" onClick={this.goPrev}>
          <img ref="leftArrow" style={{left: '0px'}} src={require('./left.png')}></img>
        </div>
        <div className="Content-right" onClick={this.goNext}>
          <img ref="rightArrow" style={{right: '0px'}} src={require('./right.png')}></img>
        </div>
      </div>
      :
      <h1>Loading</h1>
    )
  }
}

export default Content;
