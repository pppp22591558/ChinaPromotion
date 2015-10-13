import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdFive.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class AdFive extends Component{
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
        <div className="header" ref="header" style={styles.header}>
          <h1>爹娘想刷存在感?</h1>
          <h2>战绩随时报给你</h2>
        </div>
        <div className="view">
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdFive;
