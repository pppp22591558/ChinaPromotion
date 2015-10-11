import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdTwo.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class AdTwo extends Component{
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#4A4A4F'}, {top: 0, color: 'white'});
    } else {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#4A4A4F'}, {top: 0, color: 'white', reversed: true});
    }
  }
  componentDidMount() {
    this.header = reactDOM.findDOMNode(this.refs.header);
  }
  render(){
    let styles = {
      header: {
        position: 'relative',
        color: '#4A4A4F',
        top: -40
      },
    };

    return(
      <div>
        <div ref="header" style={styles.header}>
          <h1>题海战术太无聊？<br/>答题攻地更有趣</h1>
        </div>
        <div className="view">
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdTwo;
