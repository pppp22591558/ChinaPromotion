import React, { Component } from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../decorators/withStyles';
import styles from './Content.css';
import Swipe from '../../vendor/swipe';
import AdOne from '../mobile/AdOne';
import AdTwo from '../mobile/AdTwo';
import AdThree from '../mobile/AdThree';
import AdFour from '../mobile/AdFour';
import AdFive from '../mobile/AdFive';
import { Motion, spring } from 'react-motion';

@withStyles(styles)
class Content extends Component {
  state = {
    viewWidth: 0,
    viewHeight: 0,
    slide1: true,
    slide2: false,
    slide3: false,
    slide4: false,
    slide5: false,
  }
  componentDidMount() {
    this.setState({
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight
    });
    document.title = 'China Promotion Page';
    let _ = this;
    this.swipe = Swipe(reactDOM.findDOMNode(this),
      {
        startSlide: 0,
        speed: 400,
        auto: null,
        continuous: true,
        disableScroll: true,
        stopPropagation: false,
        callback: function(index, elem) {
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
  }

  render(){
    if (this.state.viewWidth > 968){
      return this.renderDesktop();
    } else {
      return this.renderMobile();
    }
  }
  renderDesktop() {
    return(
      <div></div>
    )
  }
  renderMobile() {
    const { viewWidth, viewHeight } = this.state;
    let styles = {
      // height: viewHeight,
      width: viewWidth
    };
    return(
      <div className="swipe">
        <div className='swipe-wrap'>
          <div style={styles} className="ad ad1">
            <div className="ad-wrap">
              <AdOne active = {this.state.slide1}/>
            </div>
          </div>
          <div style={styles} className="ad ad2">
            <div className="ad-wrap">
              <AdTwo active = {this.state.slide2}/>
            </div>
          </div>
          <div style={styles} className="ad ad3">
            <div className="ad-wrap">
              <AdThree active = {this.state.slide3}/>
            </div>
          </div>
          <div style={styles} className="ad ad4">
            <div className="ad-wrap">
              <AdFour active = {this.state.slide4}/>
            </div>
          </div>
          <div style={styles} className="ad ad5">
            <div className="ad-wrap">
              <AdFive active = {this.state.slide5}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
