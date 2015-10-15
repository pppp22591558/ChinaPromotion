import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdFour.css';
import withStyles from '../../../decorators/withStyles';

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

    let text = (version) => {
      switch (version) {
        case 2:
          return(
            <div>
              <h1>弱點探測</h1>
              <h2>針對錯題考前衝刺</h2>
            </div>
          );
          break;
        default:
          return(
            <div>
              <h1>考前时间不够用?</h1>
              <h2>掌握弱点快复习</h2>
            </div>
          );
      }
    };

    return(
      <div className="AdFour">
        <div className="header" ref="header" style={styles.header}>
          {text(this.props.version)}
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
