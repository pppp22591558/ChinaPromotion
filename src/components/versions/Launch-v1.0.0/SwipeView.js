import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import withStyles from '../../../decorators/withStyles'
import styles from './SwipeView.css'
import Swipe from '../../../vendor/swipe'
import reactDOM from 'react-dom'
import _ from 'lodash'
import AdOne from './AdOne'
import AdTwo from './AdTwo'
import AdThree from './AdThree'
import AdFour from './AdFour'
import AdFive from './AdFive'
import Dialog from './Dialog'

@withStyles(styles)
class SwipeView extends Component {
  constructor(props) {
    super(props)
    this.scenes = [ <AdOne/>, <AdTwo/>, <AdThree/>, <AdFour/>, <AdFive/> ]
  }
  state = {
    screenHeight: 0,
    slides: [ true, false, false, false, false ],
  }
  getSlideStates(index){
    const numberOfSlides = this.state.slides.length
    let array = []
    _.times(numberOfSlides, () => array.push(false))
    array[index] = true
    return array
  }
  nextSlide(e){
    if (e.target.getAttribute('data-link')) return
    else this.swipe.next()
  }
  prevSlide(){
    this.swipe.prev()
  }
  componentDidMount() {
    this.setState({ screenHeight: window.innerHeight })
    this.swipe = Swipe(this.refs.swipe,
      {
        startSlide: 0,
        speed: 400,
        auto: null,
        continuous: true,
        disableScroll: true,
        stopPropagation: false,
        callback: (index, elem) => {
          //callback for every swipe
          this.setState({ slides: this.getSlideStates(index)})
          ga('send', {
            hitType: 'event',
            eventCategory: 'Swipe',
            eventAction: 'swipe a slide',
            eventLabel: 'slide-' + index + 1
          })
        }
      }
    )
    TweenMax.to(this.refs.leftArrow, 0.6, {left: '-8px', repeat: -1, yoyo:true});
    TweenMax.to(this.refs.rightArrow, 0.6, {right: '-8px', repeat: -1, yoyo:true});
  }
  render(){
    const styles = {
      height: this.state.screenHeight
    }
    const slides = this.state.slides.map((slide, index) => {
      return (
        <div key={index} className={`ad ad${index + 1}`} style={styles} onClick={::this.nextSlide}>
          <div className={`ad-wrap ${slide? 'active' : ''}`}>
            {this.scenes[index]}
          </div>
          <Dialog id={index + 1} active={slide}/>
        </div>
      )
    })
    return (
      <div className="SwipeView">
        <div className="swipe" ref="swipe">
          <div className="swipe-wrap">
            {slides}
          </div>
        </div>
        <div className="Content-left" onClick={::this.prevSlide}>
          <img ref="leftArrow" style={{left: '0px'}} src={require('./images/left.png')}></img>
        </div>
        <div className="Content-right" onClick={::this.nextSlide}>
          <img ref="rightArrow" style={{right: '0px'}} src={require('./images/right.png')}></img>
        </div>
      </div>
    )
  }
}

export default SwipeView
