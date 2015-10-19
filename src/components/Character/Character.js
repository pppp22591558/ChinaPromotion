import React, {Component} from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../decorators/withStyles';
import styles from './Character.css';
import TweenMax from '../../vendor/gsap';
import { get as getLine } from '../../constants/ABTest';

@withStyles(styles)
class Character extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      this.tl.to(this.character, 0.4, {WebkitTransform: 'translateY(0)'})
             .to(this.bubble, 0.4, {WebkitTransform: 'translateY(0) scale(1)'}, '-=0.4');
    } else {
      this.tl.to(this.character, 0, {WebkitTransform: 'translateY(100%)'})
             .to(this.bubble, 0, {WebkitTransform: 'translateY(200%) scale(0.7)'});
    }
  }
  componentDidMount() {
    this.character = reactDOM.findDOMNode(this.refs.character);
    this.bubble = reactDOM.findDOMNode(this.refs.bubble);
    this.tl = new TimelineMax();
    console.log(getLine(this.props.version).scene1.dialogue);
  }
  handleClick(e){
    e.preventDefault();
    TweenMax.to(this.character, 0, {WebkitTransform: 'scale(1.2)'});
  }
  handleTouchEnd(e){
    e.preventDefault();
    TweenMax.to(this.character, 0, {WebkitTransform: 'scale(1)'})
  }
  render(){
    let line;
    switch (this.props.line) {
      case 1:
        line = getLine(this.props.version).scene2.dialogue;
        break;
      case 2:
        line = getLine(this.props.version).scene3.dialogue;
        break;
      case 3:
        line = getLine(this.props.version).scene4.dialogue;
        break;
      case 4:
        line = getLine(this.props.version).scene5.dialogue;
        break;
      default:

    }
    return(
      <div className="Character">
        <img ref="character" onTouchStart={this.handleClick} onTouchEnd={this.handleTouchEnd} src={require('./IP_' + this.props.line + '.png')}></img>
        <div ref="bubble" className="bubble">
          <h4>{line}</h4>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Character;
