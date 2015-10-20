import React, { Component } from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../../decorators/withStyles';
import styles from './Modal.css';
import GSAP from 'react-gsap-enhancer';
import Link from '../../Link';
import _ from 'lodash';

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
  hide(){
    this.props.hide();
  }
  render(){
    return(
      <div className="Modal" key="modal" onClick={this.hide} style={{top: '200%'}}>
        {
          _.includes([1, 2, 5, 6], this.props.version)?
          <h4>感谢您对PaGamO的支持<br/>目前我们正在努力开发App</h4>
          :
          <h4>感謝您對PaGamO的支持<br/>目前我們正在努力開發App</h4>
        }
        <div onTouchStart={this.handleTouchStart} onTouchEnd={this.handleTouchEnd}>
          <a href="http://goo.gl/forms/uLMwmAv1Uc" target="/blank">
            填問卷領獎品去！
          </a>
        </div>
      </div>
    )
  }
}

export default Modal;
