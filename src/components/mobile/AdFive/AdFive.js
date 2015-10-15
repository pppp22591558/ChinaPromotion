import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdFive.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class AdFive extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {WebkitTransform: 'translateY(-200%)'}, {WebkitTransform: 'translateY(0%)'});
    } else {
      TweenMax.fromTo(this.header, 0.4, {WebkitTransform: 'translateY(-200%)'}, {WebkitTransform: 'translateY(0%)', reversed: true});
    }
  }
  componentDidMount() {
    this.header = reactDOM.findDOMNode(this.refs.header);
    const parent = reactDOM.findDOMNode(this.refs.parent);
    const child = reactDOM.findDOMNode(this.refs.child);
    let tl = new TimelineMax({
      repeat: -1
    });
    tl.to(parent, 0, {WebkitTransform: 'translateX(0px) scale(1)', ease: Power0.easeNone, force3D: true})
      .to(child, 0, {WebkitTransform: 'translateX(0px) scale(0.2)', zIndex: 0, ease: Power0.easeNone, force3D: true})
      .to(parent, 0.6, {WebkitTransform: 'translateX(-100px) scale(0.4)', ease: Power2.easeIn, force3D: true})
      .to(child, 0.6, {WebkitTransform: 'translateX(100px) scale(0.4)', zIndex: 2, ease: Power2.easeIn, force3D: true}, '-=0.6')
      .to(parent, 0.4, {WebkitTransform: 'translateX(0px) scale(0.2)', ease: Power0.easeNone, force3D: true})
      .to(child, 0.4, {WebkitTransform: 'translateX(0px) scale(1)', ease: Power0.easeNone, force3D: true}, '-=0.4')
      .to(parent, 1.6, {WebkitTransform: 'translateX(0px) scale(0.2)', ease: Power0.easeNone, force3D: true})
      .to(parent, 0.6, {WebkitTransform: 'translateX(100px) scale(0.4)', ease: Power2.easeIn, force3D: true})
      .to(child, 0.6, {WebkitTransform: 'translateX(-100px) scale(0.4)', zIndex: 0, ease: Power2.easeIn, force3D: true}, '-=0.6')
      .to(parent, 0.4, {WebkitTransform: 'translateX(0px) scale(1)', ease: Power0.easeNone, force3D: true})
      .to(child, 0.4, {WebkitTransform: 'translateX(0px) scale(0.2)', ease: Power0.easeNone, force3D: true}, '-=0.4')
      .to(parent, 1.6, {WebkitTransform: 'translateX(0px) scale(1)', ease: Power0.easeNone, force3D: true});
      // .to(parent, 0.4, {left: '0px'}, '+=0.4');
  }
  handleClick(){
    this.props.next();
  }
  render(){
    let styles = {
      header: {
        position: 'relative',
        color: '#555555',
      },
    };

    return(
      <div className="AdFive">
        <div className="header" ref="header" style={styles.header}>
          <h1>爹娘想刷存在感?</h1>
          <h2>战绩随时报给你</h2>
        </div>
        <div className="view">
          <div className="demo-img" onClick={this.handleClick}>
            <div style={{zIndex: 1}} className="demo parent" ref="parent">
              <img src={require('./parent.png')}></img>
            </div>
            <div style={{zIndex: 2}} className="demo child" ref="child">
              <img src={require('./child.png')}></img>
            </div>
          </div>
        </div>
      </div>
    )
    // <img ref="child" className="demo child" src={require('./child.png')}></img>
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdFive;
