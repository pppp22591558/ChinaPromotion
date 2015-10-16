import React, { Component } from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../../decorators/withStyles';
import styles from './Modal.css';
import TweenMax from '../../../vendor/gsap';

@withStyles(styles)

class Modal extends Component {
  constructor(){
    super();
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.hide = this.hide.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.to(this.refs.modal, 2, {top: '0%', ease: Elastic.easeOut.config(1, 0.75), force3D: true});
    } else {
      TweenMax.to(this.refs.modal, 0.5, {top: '200%', ease: Power1.easeIn, force3D: true});
    }
  }
  handleTouchStart(){
    this.renderCss('.Modal a {background: #CC4B4B}');
  }
  handleTouchEnd(){
    this.renderCss('.Modal a {background: #F76464}');
  }
  hide(){
    this.props.hide();
  }
  render(){
    return(
      <div className="Modal" ref="modal" style={{top: '200%'}} onClick={this.hide}>
        <h4>感谢您对PaGamO的支持<br/>目前我们正在努力开发App</h4>
        <a onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} href="#">填問卷領獎品去！</a>
      </div>
    )
  }
}

export default Modal;
