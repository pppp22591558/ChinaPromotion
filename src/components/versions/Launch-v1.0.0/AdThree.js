import React, { Component } from 'react'
import t from './translation'
import styles from './Ads.css'
import withStyles from '../../../decorators/withStyles'

@withStyles(styles)
class AdThree extends Component {
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
      <div className="ad-three">
        <div className="view" style={{ height: this.state.screenHeight }}>
          <img className="choose-content" src={require('./images/4_1.png')}/>
        </div>
      </div>
    )
  }
}

export default AdThree
