import React, { Component } from 'react';
import TweenMax from '../../../vendor/gsap';
import reactDOM from 'react-dom';
import styles from './AdOne.css';
import withStyles from '../../../decorators/withStyles';
import Modal from '../Modal';
import { get as getContent } from '../../../constants/ABTest';

@withStyles(styles)

class AdOne extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
    this.addScale = this.addScale.bind(this);
    this.removeScale = this.removeScale.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  static propTypes = {
    next: React.PropTypes.func.isRequired
  }

  state = {
    isModalActive: false
  }

  componentWillReceiveProps(newProps){
    if (!newProps.active){
      this.setState({isModalActive: false});
    }
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
  showModal(e){
    this.setState({isModalActive: true});
    //send the download data to GA
    let downloadType = e.target.getAttribute('data-download');
    ga('send', {
      hitType: 'event',
      eventCategory: 'Download',
      eventAction: 'click the icon',
      eventLabel: downloadType
    });
  }

  hideModal(){
    this.setState({isModalActive: false});
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

    let header_1 = getContent(this.props.version).scene1.header_1;
    let header_2 = getContent(this.props.version).scene1.header_2;
    let subtitle = getContent(this.props.version).scene1.subtitle;

    return(
      <div className="AdOne">
        <div className="AdOne-header" ref="header" style={styles.header}>
          <img className="palm palm-left" src={require('./palm-left.png')}></img>
          <img className="palm palm-right" src={require('./palm-right.png')}></img>
          <h2>{header_1}<br/>{header_2}<br/></h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="view">
          <img ref="land" onClick={this.handleClick} style={styles.land} src={require('./land-08.png')}></img>
          <img ref="mark" onClick={this.handleClick} style={styles.mark} src={require('./mark-08.png')}></img>
          <div className="download">
            <img ref="icon1" onTouchStart={this.addScale} onTouchEnd={this.removeScale} onClick={this.showModal} src={require('./apple.png')} data-download="ios"></img>
            <img ref="icon2" onTouchStart={this.addScale} onTouchEnd={this.removeScale} onClick={this.showModal} src={require('./android.png')} data-download="android"></img>
            <img ref="icon3" onTouchStart={this.addScale} onTouchEnd={this.removeScale} onClick={this.showModal} src={require('./official.png')} data-download="official"></img>
          </div>
        </div>
        <Modal active = {this.state.isModalActive} hide = {this.hideModal} version = {this.props.version}/>
      </div>
    )
  }
}

export default AdOne;
