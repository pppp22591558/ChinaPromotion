import React, { Component } from 'react';
import reactDOM from 'react-dom';
import styles from './AdTwo.css';
import withStyles from '../../../decorators/withStyles';
import { get as getLine } from '../../../constants/ABTest';

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
    const { version } = this.props
    let header = getLine(version).scene2.header;
    let subtitle = getLine(version).scene2.subtitle;
    return(
      <div>
        <div className="header" ref="header" style={styles.header}>
          <div>
            <h1>{header}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
        <div className="view">
          <img className="land-img lands" onClick={this.handleClick} src={require('./lands.png')} alt={header + subtitle}></img>
        </div>
      </div>
    )
    // <img className="app-header" src={require('./app-header.png')}></img>
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdTwo;
