import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdFour.css';
import withStyles from '../../../decorators/withStyles';
import { get as getLine } from '../../../constants/ABTest';

@withStyles(styles)
class AdFour extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {WebkitTransform: 'translateY(-200%)'}, {WebkitTransform: 'translateY(0%)'});
      TweenMax.to(this.practice, 0.4, {WebkitTransform: 'scale(1)', ease: Elastic.easeOut.config(1, 0.3)});
    } else {
      TweenMax.fromTo(this.header, 0.4, {WebkitTransform: 'translateY(-200%)'}, {WebkitTransform: 'translateY(0%)', reversed: true});
      TweenMax.to(this.practice, 0.4, {WebkitTransform: 'scale(0.2)', ease: Elastic.easeOut.config(1, 0.3)});
    }
  }
  componentDidMount() {
    this.header = reactDOM.findDOMNode(this.refs.header);
    this.practice = reactDOM.findDOMNode(this.refs.practice);
  }
  handleClick(){
    this.props.next();
  }
  render(){
    let styles = {
      header: {
        position: 'relative',
        color: 'white',
      },
    };
    let header = getLine(this.props.version).scene4.header;
    let subtitle = getLine(this.props.version).scene4.subtitle;

    return(
      <div className="AdFour">
        <div className="header" ref="header" style={styles.header}>
          <h1>{header}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="view">
          <div ref="practice" onClick={this.handleClick} className="practice-container">
            <img className="practice practice-header" src={require('./practice.png')}></img>
            <img className="practice" src={require('./practice_f1.png')}></img>
            <img className="practice" src={require('./practice_f2.png')}></img>
          </div>
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdFour;
