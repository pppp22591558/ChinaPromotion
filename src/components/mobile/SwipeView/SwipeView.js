import React, {Component} from 'react';
import reactDOM from 'react-dom';
import AdOne from '../AdOne';
import AdTwo from '../AdTwo';
import AdThree from '../AdThree';
import AdFour from '../AdFour';
import AdFive from '../AdFive';
import Swipe from '../../../vendor/swipe';
import TweenMax from '../../../vendor/gsap';
import withStyles from '../../../decorators/withStyles';
import styles from './SwipeView.css';

@withStyles(styles)
class SwipeView extends Component {
  constructor() {
    super();
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
  }
  state = {
    viewWidth: 0,
    viewHeight: 0,
    slide1: true,
    slide2: false,
    slide3: false,
    slide4: false,
    slide5: false,
    isActive: false,
  }
  componentDidMount() {

    this.setState({
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight,
    });

    let _ = this;
    _.swipe = Swipe(reactDOM.findDOMNode(this.refs.swipe),
      {
        startSlide: 0,
        speed: 400,
        auto: null,
        continuous: true,
        disableScroll: true,
        stopPropagation: false,
        callback: function(index, elem) {
          //callback for every swipe
          let num = index + 1;
          let slide = 'slide' + num;
          switch (num) {
            case 1:
              _.setState({slide1: true, slide2: false, slide5: false});
              break;
            case 2:
              _.setState({slide2: true, slide3: false, slide1: false});
            break;
            case 3:
              _.setState({slide3: true, slide4: false, slide2: false});
              break;
            case 4:
              _.setState({slide4: true, slide5: false, slide3: false});
            break;
            case 5:
              _.setState({slide5: true, slide1: false, slide4: false});
              break;
          }
        },
        transitionEnd: function(index, elem) {
        }
      }
    );

    //animate the right and left arrow icons
    const leftArrow = reactDOM.findDOMNode(this.refs.leftArrow);
    const rightArrow = reactDOM.findDOMNode(this.refs.rightArrow);
    TweenMax.to(leftArrow, 0.6, {left: '-8px', repeat: -1, yoyo:true});
    TweenMax.to(rightArrow, 0.6, {right: '-8px', repeat: -1, yoyo:true});
  }

  //go to the next slide
  goNext(){
    this.swipe.next();
  }

  //go to the previous slide
  goPrev(){
    this.swipe.prev();
  }

  render(){
    const { viewWidth, viewHeight } = this.state;
    let styles = {
      // height: viewHeight,
      width: viewWidth
    };
    return(
      <div className="swipe" ref="swipe">
        <div className='swipe-wrap'>
          <div style={styles} className="ad ad1">
            <div className="ad-wrap">
              <AdOne active = {this.state.slide1} next = {this.goNext}/>
            </div>
          </div>
          <div style={styles} className="ad ad2">
            <div className="ad-wrap">
              <AdTwo active = {this.state.slide2} next = {this.goNext}/>
            </div>
          </div>
          <div style={styles} className="ad ad3">
            <div className="ad-wrap">
              <AdThree active = {this.state.slide3} clientWidth = {this.state.viewWidth} next = {this.goNext}/>
            </div>
          </div>
          <div style={styles} className="ad ad4">
            <div className="ad-wrap">
              <AdFour active = {this.state.slide4} next = {this.goNext}/>
            </div>
          </div>
          <div style={styles} className="ad ad5">
            <div className="ad-wrap">
              <AdFive active = {this.state.slide5} next = {this.goNext}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SwipeView;
