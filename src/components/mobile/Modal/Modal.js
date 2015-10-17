import React, { Component } from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../../decorators/withStyles';
import styles from './Modal.css';
// import TweenMax from '../../../vendor/gsap';
import GSAP from 'react-gsap-enhancer';

function modalShow({target}){
  var modal = target;
  return TweenMax.to(modal, 0.6, {top: '0%'});
}

function modalHide({target}){
  var modal = target;
  return TweenMax.to(modal, 0.6, {top: '200%'});
}

@withStyles(styles)
@GSAP()

class Modal extends Component {
  constructor(props){
    super(props);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hide = this.hide.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.addAnimation(modalShow);
    } else {
      this.addAnimation(modalHide);
    }
  }
  handleTouchStart(e){
    this.renderCss('.Modal a {background: #CC4B4B}');
  }
  handleTouchEnd(){
    this.renderCss('.Modal a {background: #F76464}');
  }
  handleClick(e){
    e.preventDefault();
  }
  hide(){
    this.props.hide();
  }
  render(){
    return(
      <div className="Modal" key="modal" onClick={this.hide} style={{top: '200%'}}>
        <h4>感谢您对PaGamO的支持<br/>目前我们正在努力开发App</h4>
        <a onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd} onClick={this.handleClick} href="/">填問卷領獎品去！</a>
      </div>
    )
  }
}

export default Modal;
