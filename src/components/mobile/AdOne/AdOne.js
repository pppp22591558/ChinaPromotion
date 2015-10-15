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
    this.addScale = this.addScale.bind(this);
    this.removeScale = this.removeScale.bind(this);
  }

  static propTypes = {
    next: React.PropTypes.func.isRequired
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white'});
      this.tl.to(this.icon1, 0.2, {WebkitTransform: 'translateY(0%)'})
             .to(this.icon2, 0.2, {WebkitTransform: 'translateY(0%)'})
             .to(this.icon3, 0.2, {WebkitTransform: 'translateY(0%)'});
    } else {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white', reversed: true});
      this.tl.to(this.icon1, 0, {WebkitTransform: 'translateY(300%)'})
             .to(this.icon2, 0, {WebkitTransform: 'translateY(300%)'})
             .to(this.icon3, 0, {WebkitTransform: 'translateY(300%)'});
    }
  }
  componentDidMount() {
    const land = reactDOM.findDOMNode(this.refs.land);
    const mark = reactDOM.findDOMNode(this.refs.mark);
    this.header = reactDOM.findDOMNode(this.refs.header);
    this.icon1 = reactDOM.findDOMNode(this.refs.icon1);
    this.icon2 = reactDOM.findDOMNode(this.refs.icon2);
    this.icon3 = reactDOM.findDOMNode(this.refs.icon3);
    TweenMax.to(mark, 0.5, {top: '34%' ,yoyo: true, repeat: -1});
    this.tl = new TimelineMax();
  }
  handleClick(){
    this.props.next();
  }
  addScale(e){
    TweenMax.to(e.target, 0, {WebkitTransform: 'scale(1.2)'});
  }
  removeScale(e){
    TweenMax.to(e.target, 0, {WebkitTransform: 'scale(1)'});
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
        top: '40%',
        left: '45%'
      }
    };

    return(
      <div className="AdOne">
        <div className="AdOne-header" ref="header" style={styles.header}>
          <img className="palm palm-left" src={require('./palm-left.png')}></img>
          <img className="palm palm-right" src={require('./palm-right.png')}></img>
          <h2>2014沃顿商学院<br/>全球教育创新总冠军<br/></h2>
          <h3>中国学生定制版</h3>
        </div>
        <div className="view">
          <img ref="land" onClick={this.handleClick} style={styles.land} src={require('./land-08.png')}></img>
          <img ref="mark" onClick={this.handleClick} style={styles.mark} src={require('./mark-08.png')}></img>
          <div className="download">
            <img ref="icon1" onTouchStart={this.addScale} onTouchEnd={this.removeScale} src={require('./apple.png')}></img>
            <img ref="icon2" onTouchStart={this.addScale} onTouchEnd={this.removeScale} src={require('./android.png')}></img>
            <img ref="icon3" onTouchStart={this.addScale} onTouchEnd={this.removeScale} src={require('./official.png')}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default AdOne;
