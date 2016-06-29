import React, { Component } from 'react';
import reactDOM from 'react-dom';
import styles from './AdOne.css';
import withStyles from '../../../decorators/withStyles';
import Modal from '../Modal';
import { get as getContent } from '../../../constants/ABTest';
import { version } from '../../../config';

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
    isModalActive: false,
    modalType: '',
    os: null
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.active) {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white'});
      this.tl.to(this.icon1, 0.2, {WebkitTransform: 'translateY(0%)'})
             .to(this.icon2, 0.2, {WebkitTransform: 'translateY(0%)'});
    } else {
      TweenMax.fromTo(this.header, 0.4, {top: -40, color: '#69D6D8'}, {top: 0, color: 'white', reversed: true});
      this.tl.to(this.icon1, 0, {WebkitTransform: 'translateY(300%)'})
             .to(this.icon2, 0, {WebkitTransform: 'translateY(300%)'});
    }
  }
  componentDidMount() {
    const land = reactDOM.findDOMNode(this.refs.land);
    const mark = reactDOM.findDOMNode(this.refs.mark);
    this.header = reactDOM.findDOMNode(this.refs.header);
    this.icon1 = reactDOM.findDOMNode(this.refs.icon1);
    this.icon2 = reactDOM.findDOMNode(this.refs.icon2);
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
  showModal(type){
    let downloadType = type;
    // this.setState({isModalActive: true, modalType: downloadType});
    //send the download data to GA
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

  getAndroidDownloadLink() {
    return version == 'us'? 'https://play.google.com/store/apps/details?id=com.boniotw.global.pagamo' : '/download'
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

    let header_1 = getContent(1).scene1.header_1;
    let header_2 = getContent(1).scene1.header_2;
    let subtitle = getContent(1).scene1.subtitle;
    let long_press = getContent(1).scene1.long_press;
    let other_browsers = getContent(1).scene1.other_browsers;
    let img_type;
    if (version === 'us'){
      img_type = '_us';
    } else if (version === 'tw'){
      img_type = '_tw'
    } else {
      img_type = '';
    }

    const { isModalActive } = this.state
    const { os, ua, isWx } = this.props

    return(
      <div className="AdOne">
        <div className="AdOne-header" ref="header" style={styles.header}>
          <img className="palm palm-left" src={require('./palm-left.png')}></img>
          <img className="palm palm-right" src={require('./palm-right.png')}></img>
          <h2 className={`${version}`}>{header_1}<br/>{header_2}<br/></h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="view">
          <img ref="land" onClick={this.handleClick} style={styles.land} src={require('./land-08.png')}></img>
          <img ref="mark" onClick={this.handleClick} style={styles.mark} src={require('./mark-08.png')}></img>
          <div className={`download ${version}`}>
            <a href="/ios-download"
              className={`ios ${(os != 'AndroidOS') && 'active'}`}
              data-download="ios">
              <img ref="icon1"
                src={isWx?
                  require('./ios_qr_code.png') :
                  require('./apple' + img_type + '.png')}
                data-download="ios"/>
                { isWx &&
                  <span className="long-press">{long_press}</span>
                }
            </a>
            <a href={this.getAndroidDownloadLink()}
              className={`android ${(os != 'iOS' || version == 'us') && 'active'}`}
              data-download="android">
              <img ref="icon2"
                src={require('./android' + img_type + '.png')}
                data-download="android"/>
                { isWx &&
                  <span className="other-browsers">{other_browsers}</span>
                }
            </a>
          </div>
        </div>
        <Modal active = {isModalActive} hide = {this.hideModal} version = {this.props.version}/>
      </div>
    )
  }
}

// <img ref="icon3" onTouchStart={this.addScale} onTouchEnd={this.removeScale} onClick={this.showModal} src={require('./official' + img_type +'.png')} data-download="official"></img>

export default AdOne;
