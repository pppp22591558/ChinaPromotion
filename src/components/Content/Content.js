import React, { Component } from 'react';
import reactDOM from 'react-dom';
import withStyles from '../../decorators/withStyles';
import styles from './Content.css';
import Swipe from '../../vendor/swipe';
import { Motion, spring } from 'react-motion';

@withStyles(styles)
class Content extends Component {
  state = {
    viewWidth: 0,
    viewHeight: 0
  }
  componentDidMount() {
    this.setState({
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight
    });
    document.title = 'China Promotion Page';
    this.swipe = Swipe(reactDOM.findDOMNode(this),
      {
        startSlide: 0,
        speed: 400,
        auto: null,
        continuous: true,
        disableScroll: true,
        stopPropagation: false,
        callback: function(index, elem) {},
        transitionEnd: function(index, elem) {}
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
              <Motion
                defaultStyle={{x:-100}}
                style={{x: spring(0, [180, 12])}}>
                {interpolatedStyle => <h1 style={{marginTop: interpolatedStyle.x + 'px'}}>最潮的手機佔地教育遊戲<br/>最有互助精神的社群</h1>}
              </Motion>
              <Motion
                defaultStyle={{x:0}}
                style={{x: spring(80, [180, 12])}}>
                {interpolatedStyle => <img className="ad-1-img" ref={(c) => this._img1 = c} src={require('./app-05.png')} style={{ width: interpolatedStyle.x + '%' }}></img>}
              </Motion>
            </div>
          </div>
          <div style={styles} className="ad ad2">
            <div className="ad-wrap">
              <h1>slide2</h1>
            </div>
          </div>
          <div style={styles} className="ad ad3">
            <div className="ad-wrap">
              <h1>slide3</h1>
            </div>
          </div>
          <div style={styles} className="ad ad4">
            <div className="ad-wrap">
              <h1>slide4</h1>
            </div>
          </div>
          <div style={styles} className="ad ad5">
            <div className="ad-wrap">
              <h1>slide5</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content;
