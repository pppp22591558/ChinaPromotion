import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdOne.css';
import withStyles from '../../../decorators/withStyles';

@withStyles(styles)

class AdOne extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    next: React.PropTypes.func.isRequired
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white'});
    } else {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white', reversed: true});
    }
  }
  componentDidMount() {
    const land = reactDOM.findDOMNode(this.refs.land);
    const mark = reactDOM.findDOMNode(this.refs.mark);
    const markShadow = reactDOM.findDOMNode(this.refs.markShadow);
    this.header = reactDOM.findDOMNode(this.refs.header);
    TweenMax.to(mark, 0.5, {top: '45%' ,yoyo: true, repeat: -1});
    // TweenMax.to(markShadow, 0.5, {left: '53%', width:'7%', yoyo: true, repeat: -1});
  }
  handleClick(){
    this.props.next();
  }

  render(){
    let styles = {
      header: {
        position: 'relative',
        color: '#69D6D8',
        top: -40
      },
      land: {
        width: '100%'
      },
      mark: {
        width: '15%',
        zIndex: 1,
        position: 'absolute',
        display: 'block',
        top: '50%',
        left: '45%'
      },
      // markShadow: {
      //   width: '10%',
      //   zIndex: 0,
      //   position: 'absolute',
      //   display: 'block',
      //   top: '61%',
      //   left: '52%'
      // }
    };

    return(
      <div>
        <div className="AdOne-header" ref="header" style={styles.header}>
          <img className="palm palm-left" src={require('./palm-left.png')}></img>
          <img className="palm palm-right" src={require('./palm-right.png')}></img>
          <h2>2014沃顿商学院<br/>全球教育创新总冠军<br/></h2>
          <h3>中国学生定制版</h3>
        </div>
        <div className="view">
          <img ref="land" onClick={this.handleClick} style={styles.land} src={require('./land-08.png')}></img>
          <img ref="mark" onClick={this.handleClick} style={styles.mark} src={require('./mark-08.png')}></img>
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdOne;
