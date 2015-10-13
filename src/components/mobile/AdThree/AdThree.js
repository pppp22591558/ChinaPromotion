import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdThree.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class AdThree extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#CC9D70'}, {top: 0, color: 'white'});
      // TweenMax.to(this.rank3, 0, {WebkitTransform: 'translateY(-200%)', force3D:true});
      this.tl.to(this.rank3, 1, {WebkitTransform: 'translateY(-200%) scale(1.1)', force3D:true}, '+= 0.4')
             .to(this.rank2, 1, {WebkitTransform: 'translateY(100%)', force3D:true}, '-= 1')
             .to(this.rank1, 1, {WebkitTransform: 'translateY(100%)', force3D:true}, '-= 1')
    } else {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#CC9D70'}, {top: 0, color: 'white', reversed: true});
      this.tl.to(this.rank1, 0.2, {WebkitTransform: 'translateY(0%)', force3D:true})
             .to(this.rank2, 0.2, {WebkitTransform: 'translateY(0%)', force3D:true})
             .to(this.rank3, 0.2, {WebkitTransform: 'translateY(0%)', force3D:true})
    }
  }
  componentDidMount() {
    this.header = reactDOM.findDOMNode(this.refs.header);
    this.rank1 = reactDOM.findDOMNode(this.refs.rank1);
    this.rank2 = reactDOM.findDOMNode(this.refs.rank2);
    this.rank3 = reactDOM.findDOMNode(this.refs.rank3);
    this.rank4 = reactDOM.findDOMNode(this.refs.rank4);
    this.rank5 = reactDOM.findDOMNode(this.refs.rank5);
    this.tl = new TimelineMax();
  }
  handleClick(){
    this.props.next();
  }
  render(){
    let styles = {
      header: {
        position: 'relative',
        color: '#CC9D70',
        top: -40
      },
      text: {
        lineHeight: this.props.clientWidth * 0.8 / 6.3 + 'px'
      },
      bg: {
        background: 'url('+ require('./bg.jpg') + ')',
        height: '100vh',
        position: 'relative',
        top: '-50px',
        paddingTop: '50px'
      }
    };

    return(
      <div>
        <div className="header" ref="header" style={styles.header}>
          <h1>学习效果在哪里？</h1>
          <h2>排名进步天天见</h2>
        </div>
        <div className="AdThree-view" onClick={this.handleClick}>
          <div ref="rank1" className="rank rank1">
            <h5 style={styles.text}>同學A</h5>
            <img ref="img" src={require('./rank.svg')}></img>
          </div>
          <div ref="rank2" className="rank rank2">
            <h5 style={styles.text}>同學B</h5>
            <img src={require('./rank.svg')}></img>
          </div>
          <div ref="rank3" className="rank rank3">
            <h5 style={styles.text}>本學霸我</h5>
            <img src={require('./rank1.svg')}></img>
          </div>
          <div ref="rank4" className="rank rank4">
            <h5 style={styles.text}>同學C</h5>
            <img src={require('./rank.svg')}></img>
          </div>
          <div ref="rank5" className="rank rank5">
            <h5 style={styles.text}>同學D</h5>
            <img src={require('./rank.svg')}></img>
          </div>
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdThree;
