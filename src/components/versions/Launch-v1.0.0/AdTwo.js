import React, { Component } from 'react'
import t from './translation'
import styles from './Ads.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
class AdTwo extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    screenHeight: 0
  }
  componentDidMount() {
    this.setState({ screenHeight: Math.min(window.innerHeight, 736) })
  }
  render(){
    return(
      <div className="ad-two">
        <div className="view" style={{ height: this.state.screenHeight }}>
          <img className="top-bar" ref="top-bar" src={require('./images/2_2.svg')}/>
          <img className="lands" src={require('./images/2_1.png')}></img>
          <img className="bottom-bar" ref="bottom-bar" src={require('./images/2_4.svg')}/>
        </div>
      </div>
    )
  }
}

export default AdTwo
