import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdTwo.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)
class AdTwo extends Component{
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
  }

  handleClick(){
    this.props.next();
  }

  render(){
    let styles = {
      header: {
        position: 'relative',
        color: 'white'
      },
      question: {
        marginBottom: '0.3em'
      }
    };

    let text = (version) => {
      switch (version) {
        case 2:
          return(
            <div>
              <h1>答題攻地</h1>
              <h2>邊玩邊學戰勝題海</h2>
            </div>
          );
          break;
        default:
          return(
            <div>
              <h1>题海战术太无聊？</h1>
              <h2>答题攻地更有趣</h2>
            </div>
          );
      }
    };

    return(
      <div>
        <div className="header" ref="header" style={styles.header}>
          {text(this.props.version)}
        </div>
        <div className="view">
          <img className="land-img lands" onClick={this.handleClick} src={require('./lands.png')}></img>
        </div>
      </div>
    )
    // <img className="app-header" src={require('./app-header.png')}></img>
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdTwo;
