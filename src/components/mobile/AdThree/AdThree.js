import React, { Component } from 'react';
import reactDOM from 'react-dom';
import styles from './AdThree.css';
import withStyles from '../../../decorators/withStyles';
import { get as getLine } from '../../../constants/ABTest';

@withStyles(styles)
class AdThree extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4,{
          transform: 'translateY(-200%)',
          WebkitTransform: 'translateY(-200%)'
        },{
          transform: 'translateY(0%)',
          WebkitTransform: 'translateY(0%)'
        }
      );
      new TimelineMax()
        .to(this.rank3, 1, {
          transform: 'translateY(-200%)',
          WebkitTransform: 'translateY(-200%)'
        }, '+= 0.4')
        .to(this.rank2, 1, {
          transform: 'translateY(100%)',
          WebkitTransform: 'translateY(100%)'
        }, '-= 1')
        .to(this.rank1, 1, {
          transform: 'translateY(100%)',
          WebkitTransform: 'translateY(100%)'
        }, '-= 1')
    } else {
      TweenMax.fromTo(this.header, 0.4, {
        transform: 'translateY(-200%)',
        WebkitTransform: 'translateY(-200%)'
      }, {
        transform: 'translateY(0%)',
        WebkitTransform: 'translateY(0%)',
        reversed: true
      });
      new TimelineMax()
        .to(this.rank1, 0.2, {
          transform: 'translateY(0%)',
          WebkitTransform: 'translateY(0%)'
        })
        .to(this.rank2, 0.2, {
          transform: 'translateY(0%)',
          WebkitTransform: 'translateY(0%)'
        })
        .to(this.rank3, 0.2, {
          transform: 'translateY(0%)',
          WebkitTransform: 'translateY(0%)'
        })
    }
  }
  componentDidMount() {
    this.header = reactDOM.findDOMNode(this.refs.header);
    this.rank1 = reactDOM.findDOMNode(this.refs.rank1);
    this.rank2 = reactDOM.findDOMNode(this.refs.rank2);
    this.rank3 = reactDOM.findDOMNode(this.refs.rank3);
    this.rank4 = reactDOM.findDOMNode(this.refs.rank4);
    this.rank5 = reactDOM.findDOMNode(this.refs.rank5);
  }
  handleClick(){
    this.props.next();
  }
  render(){
    let lineHeight;
    if (window.innerWidth < 420 ){
      lineHeight = window.innerWidth * 0.8 / 6.3;
    } else {
      lineHeight = 420 * 0.8 / 6.3;
    }
    let styles = {
      header: {
        position: 'relative',
        color: 'white',
      },
      text: {
        lineHeight: lineHeight + 'px'
      },
      bg: {
        background: 'url('+ require('./bg.jpg') + ')',
        height: '100vh',
        position: 'relative',
        top: '-50px',
        paddingTop: '50px'
      }
    };
    let header = getLine(this.props.version).scene3.header;
    let subtitle = getLine(this.props.version).scene3.subtitle;
    let class_mates = getLine(this.props.version).scene3.class_mates

    return(
      <div>
        <div className="header" ref="header" style={styles.header}>
          <h1>{header}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className="AdThree-view" onClick={this.handleClick}>
          <div ref="rank1" className="rank rank1">
            <h5 style={styles.text}><span className="ranking">2</span><span className="name">{class_mates.a}</span><span className="points">100</span></h5>
            <img ref="img" src={require('./rank.svg')}></img>
          </div>
          <div ref="rank2" className="rank rank2">
            <h5 style={styles.text}><span className="ranking">3</span><span className="name">{class_mates.b}</span><span className="points">120</span></h5>
            <img src={require('./rank.svg')}></img>
          </div>
          <div ref="rank3" className="rank rank3">
            <h5 style={styles.text}><span className="ranking">1</span><span className="name">{class_mates.me}</span><span className="points">200</span></h5>
            <img src={require('./rank1.svg')}></img>
          </div>
          <div ref="rank4" className="rank rank4">
            <h5 style={styles.text}><span className="ranking">4</span><span className="name">{class_mates.c}</span><span className="points">80</span></h5>
            <img src={require('./rank.svg')}></img>
          </div>
          <div ref="rank5" className="rank rank5">
            <h5 style={styles.text}><span className="ranking">5</span><span className="name">{class_mates.d}</span><span className="points">60</span></h5>
            <img src={require('./rank.svg')}></img>
          </div>
        </div>
      </div>
    )
    // <img ref="markShadow" style={styles.markShadow} src={require('../../Content/mark-shadow-08.png')}></img>
  }
}

export default AdThree;
